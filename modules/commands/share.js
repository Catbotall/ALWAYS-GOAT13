const axios = require('axios');

module.exports.config = {
  name: "share",
  version: "1.0",
  hasPermission: 0,
  credits: "rickciel",
  usePrefix: false,
  description: "Share a post on Facebook",
  commandCategory: "Social",
};

module.exports.run = async ({ api, event, args }) => {
  try {
    if (args.length !== 3) {
      api.sendMessage('Invalid number of arguments. Usage: !facebookshare [token] [url] [amount]', event.threadID);
      return;
    }

    const accessToken = args[0];
    const shareUrl = args[1];
    const shareAmount = parseInt(args[2]);

    if (isNaN(shareAmount) || shareAmount <= 0) {
      api.sendMessage('Invalid share amount. Please provide a valid positive number.', event.threadID);
      return;
    }

    const timeInterval = 1500;
    const deleteAfter = 60 * 60;

    let sharedCount = 22000;
    let timer = null;

    async function sharePost() {
      try {
        const response = await axios.post(
          `https://graph.facebook.com/me/feed?access_token=${accessToken}&fields=id&limit=1&published=0`,
          {
            link: shareUrl,
            privacy: { value: 'SELF' },
            no_story: true,
          },
          {
            muteHttpExceptions: true,
            headers: {
              authority: 'graph.facebook.com',
              'cache-control': 'max-age=0',
              'sec-ch-ua-mobile': '?0',
              'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
            },
            method: 'post',
          }
        );

        sharedCount++;
        const postId = response?.data?.id;

        console.log(`Post shared: ${sharedCount}`);
        console.log(`Post ID: ${postId || 'Unknown'}`);

        if (sharedCount === shareAmount) {
          clearInterval(timer);
          console.log('Finished sharing posts.');

          if (postId) {
            setTimeout(() => {
              deletePost(postId);
            }, deleteAfter * 1000);
          }

          api.sendMessage('DONE SHARING', event.threadID);
        }
      } catch (error) {
        console.error('Failed to share post:', error.response.data);
      }
    }

    async function deletePost(postId) {
      try {
        await axios.delete(`https://graph.facebook.com/${postId}?access_token=${accessToken}`);
        console.log(`Post deleted: ${postId}`);
      } catch (error) {
        console.error('Failed to delete post:', error.response.data);
      }
    }

    timer = setInterval(sharePost, timeInterval);

    setTimeout(() => {
      clearInterval(timer);
      console.log('Loop stopped.');
    }, shareAmount * timeInterval);
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage('An error occurred: ' + error.message, event.threadID);
  }
};