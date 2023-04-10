const { Blog } = require('../models');

const blogdata = [
  {
    title: 'It’s still possible to get what you want at work',
    contents: 'The pandemic sent American workers on a roller coaster ride......',
    post_creator: 'Rani Molla',
    date_created: 'Mar 24, 2023',
    library_id: 1,
  },
  {
    title: 'Is TikTok too big to ban?',
    contents: 'It’s been a difficult few weeks for TikTok.....',
    post_creator: 'Sara Morrison',
    date_created: 'Mar 21, 2023',
    // option to leave a comment
    library_id: 3,
  },  
  {
    title: 'Bosses want to pay you more but give you less',
    contents: 'Christine Ruiz left her 9-to-5 job last summer to do the same work as a contractor instead.....',
    post_creator: 'Rani Molla',
    date_created: ' Feb 9, 2023',
    // option to leave a comment
    library_id: 1,
  },  
  {
    title: 'Why you saw more ads on your iPhone in 2022',
    contents: 'Have you noticed there are more ads on your iPhone this year?..........',
    post_creator: 'Sara Morrison',
    date_created: 'Dec 22, 2022',
    // option to leave a comment
    library_id: 4,
  },  
  {
    title: 'Why all your friends are sending you voice notes',
    contents: 'In a world where we’re overloaded with texts, anxiety-ridden about phone calls, and fatigued by video chats, many people are turning to another form of communication: voice messages.......',
    post_creator: 'Shirin Ghaffary',
    date_created: ' Apr 3, 2023',
    // option to leave a comment
    library_id: 2,
  },  
  {
    title: 'Why AI art struggles with hands',
    contents: 'Hands drawn by robots often just don’t look right........',
    post_creator: 'Phil Edwards',
    date_created: 'Apr 4, 2023',
    // option to leave a comment
    library_id: 5,
  },  
  {
    title: 'Your brain may not be private much longer',
    contents: 'If you’ve ever wished your brain was more user-friendly, neurotechnology might seem like a dream come true......',
    post_creator: 'Sigal Samuel',
    date_created: 'Mar 17, 2023',
    // option to leave a comment
    library_id: 5,
  },  
  {
    title: 'Utah’s social media for kids law could be coming to a state near you',
    contents: 'If everything goes according to the government of Utah’s plan, around this time next year, there will be some big changes on social media platforms for the state’s residents......',
    post_creator: 'Sara Morrison',
    date_created: ' Mar 25, 2023',
    // option to leave a comment
    library_id: 3,
  },  
  {
    title: 'Social media used to be free. Not anymore.',
    contents: '“If you’re not paying for the product, you are the product” has long been a common refrain about the business of social media.........',
    post_creator: 'Shirin Ghaffary ',
    date_created: 'Feb 21, 2023',
    // option to leave a comment
    library_id: 2,
  },  
  {
    title: 'How workers fought back in 2022',
    contents: 'Marissa Peterson quit her job as a bartender in Durham, North Carolina, in June, after she was sexually assaulted by a customer and felt management didn’t do enough to keep her assailant from returning to the establishment...........',
    post_creator: 'Rani Molla',
    date_created: 'Dec 15, 2022',
    // option to leave a comment
    library_id: 1,
  },  
  {
    title: 'Amazon’s Ring privacy problem is back',
    contents: 'Despite what you might think (or were told), your Amazon Ring camera might be giving video data to police without your knowledge or consent.......',
    post_creator: 'Sara Morrison',
    date_created: 'Jul 13, 2022',
    // option to leave a comment
    library_id: 4,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
