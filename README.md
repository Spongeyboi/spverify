# spongeyboi verification bot
Spongeyboi's verfication bot

This is a simple Discord bot that allows users to type one command and they can verify. This is the source code for the bot so you can self-host it yourself.
And yes. This is alot like SoundDrout's verification bot on sound's world but I written it in javascript instead of python.

# How to install and setup
**IMPORTANT NOTE:** You must have node.js v14+ for this to work. Some of you have v12 which is no longer what I use. Upgrade for this to work.
1. Create your bot and copy it's token.
2. Extract the bot files in releases (You can also clone the project but releases has curtain versions you may want incase your bot doesn't work).
3. Create a file called .env (Do this if you don't know how to create environmental variables)
4. Copy this text and change [your token here] to your bot's token. ```SPTOKEN=[Your token here]```
5. Open index.js and goto line 25. Replace `Spongeyboi#9416` with your user and tag.
6. Goto line 28 and replace `757978031296872640` with your rules channel id. `757978031296872640` is my server rules channel id. If you don't do it, the rules id will look like `<#!757978031296872640>` for people who aren't in my server.
7. open your terminal in your bot directory and type `node .` and your bot will run. (Note: ignore `Unknown message` exception as that won't affect the bot)
**OPTIONAL:** 8. Add your bot files and host it 24/7 with AWS, Heroku, etc.

# Commands
The bot will work in any channel. You now need to set it up.
1. Create a role called `Member` and make sure it's below your bot role (Your bot name) so it can assign it. (Note: the Member role's name can be changed but you must change line 17 first otherwise it will throw an error)
**OPTIONAL** 2. Goto your server settings and change the moderation level to high so people must wait 10 minutes before executing the command.
3. Create a verify channel and type `!message`. A verification message will popup (If you did step 5 of the installation process) telling users to verify. If you did step 6 of the installation, the message will mention your rules channel.
4. Make all channels (Except for the rules and verify channel) hidden for people without the Member role you made in step 1.
5. Hide the verify channel once the user gains the Member role.
6. Try `!verify` and see if it gives you the role.
If you did it correctly, the bot should give users the role.

# Support + server
You can join https://discord.gg/BK65Vq7 to see all of my bots and chat.
