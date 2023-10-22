function chatLogger(input) {
    let convo = [];
    for (let index = 0; index < input.length; index++) {
        let commands = input[index].split(' ');
        let action = commands.shift();
        if (action == 'Chat') {
            let message = commands[0];
            convo.push(message);
        }
        else if (action == 'Delete') {
            let message = commands[0];
            if (convo.includes(message)) {
                let messageIndex = convo.indexOf(message);
                convo.splice(messageIndex, 1);
            }
            else{continue;}
        }
        else if (action == 'Edit') {
            let message = commands[0];
            let editedVersion = commands[1];
            if (convo.includes(message)) {
                let messageIndex = convo.indexOf(message);
                convo.splice(messageIndex,1,editedVersion);
            }
            else{
                continue;
            }
        }
        else if (action == 'Pin') {
            let message = commands[0];
            if (convo.includes(message)) {
            let messageIndex = convo.indexOf(message);
            convo.splice(messageIndex,1);
            convo.push(message);}

        }
        else if (action == 'Spam') {
            for (let message of commands) {
                convo.push(message);
            }
        }
        else if (action == 'end') {
            break;
        }
    }
    console.log(convo.join('\n'));
}
    
chatLogger(["Chat John", "Spam Let's go to the zoo", "Edit zoo cinema", "Chat tonight", "Pin John", "end"]);
chatLogger(["Chat Hello", "Delete John", "Pin Hi", "end"]);