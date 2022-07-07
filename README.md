
# Faro-bot: a Rodrigo Faro's show Discord bot

Rodrigo Faro is a brazilian show host and he has a segment in his show called "Vai dar namoro", in which
the men participants have to come up with pickup lines to win the heart of one of the women participating.

The show lately got viral and quickly became a meme. So what better way to have fun and learn some things along the way than creating a whole app around that meme?

# Discord Commands

## `/cantada`
It receives two params `<targetuser> <pickupline>` and sends an anonymous embed message to the channel targeting your beloved.

<img width="368" alt="Screen Shot 2022-07-02 at 16 52 22" src="https://user-images.githubusercontent.com/57234795/177014541-ecb1f0a8-c4d2-48ba-ae12-2118aced195b.png">

Two buttons will show up and only the targeted user can either accept or deny it. If they accept, a private channel will be created with the two of them. Otherwise, Faro's sorry for you, it wasn't this time 😢

<img width="400" alt="Screen Shot 2022-07-02 at 16 53 32" src="https://user-images.githubusercontent.com/57234795/177014566-0ee5526b-5bc4-46c9-b326-d28d4e163f0e.png">

We'll soon implement a user bio and a check to see if the selected user can be targeted. Those preferences will be available for editing on the bot's web dashboard!

## `/catchphrase`
Throws a random catchphrase from the Rodrigo Faro's show.
