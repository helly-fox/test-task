let messages = [
    {title: 'First message', body: 'First message body'},
    {title: 'Second message', body: 'Second message body'},
    {title: 'Third message', body: 'Third message body'},
];

const forum =  {
    getMessages(req, res){
        res.json(messages);
    },

    addMessage(req, res){
        if(!req.body.title || !req.body.body){
            res.status(400).send('Invalid parameters!');

        } else {
            messages.unshift({title: req.body.title, body: req.body.body});
            res.json(messages);
        }
    }
};
module.exports = forum;