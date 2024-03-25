module.exports.config = {
	name: "quiz",
	version: "1.0.0",
	credits: "Anjelo Cayao Arabis",
	hasPermssion: 0,
	description: "Answer questions (English) note this code is modified handleReaction into handleReply",
	usePrefix: true,
  commandCategory: "game",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.handleReply = ({ api, event, handleReply }) => {
	if (event.senderID !== handleReply.author) return;
	let response = event.body.trim().toLowerCase();
	let correctAnswer = handleReply.answer.toLowerCase();
	
	if (response === correctAnswer) {
		api.sendMessage("Congrats, you got the correct answer. 🎉💦", event.threadID);
	} else {
		api.sendMessage("Oops, your answer is incorrect please try again cry little monkey 😿", event.threadID);
	}

	const indexOfHandle = global.client.handleReply.findIndex(e => e.messageID === handleReply.messageID);
	global.client.handleReply.splice(indexOfHandle, 1);
	handleReply.answerYet = 1;
	global.client.handleReply.push(handleReply);
};

module.exports.run = async ({ api, event, args }) => {
	const axios = global.nodemodule["axios"];
	let difficulties = ["easy", "medium", "hard"];
	let difficulty = args[0];
	(difficulties.includes(difficulty)) ? "" : difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
	let fetch = await axios(`https://opentdb.com/api.php?amount=1&encode=url3986&type=boolean&difficulty=${difficulty}`);
	if (!fetch.data) return api.sendMessage("Can't find the question because the server is busy", event.threadID, event.messageID);
	return api.sendMessage(`Here is the question for you:\n\nQuiz:    ${decodeURIComponent(fetch.data.results[0].question)}\n\nreply "True" if the question is correct.\nreply "False" if the answer is incorrect.`, event.threadID, async (err, info) => {
		global.client.handleReply.push({
			name: "quiz",
			messageID: info.messageID,
			author: event.senderID,
			answer: fetch.data.results[0].correct_answer.toLowerCase(),
			answerYet: 0
		});
		await new Promise(resolve => setTimeout(resolve, 20 * 1000));
		const indexOfHandle = global.client.handleReply.findIndex(e => e.messageID === info.messageID);
		let data = global.client.handleReply[indexOfHandle];
		if (data.answerYet !== 1) {
			api.sendMessage(`Time out!! The correct answer is ${fetch.data.results[0].correct_answer}`, event.threadID, info.messageID);
			return global.client.handleReply.splice(indexOfHandle, 1);
		} else {
			return;
		}
	});
}