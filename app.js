const form = document.getElementById('marketing-form');
const results = document.getElementById('results');
const grid = document.getElementById('plan-grid');
const heading = document.getElementById('plan-heading');
const summary = document.getElementById('plan-summary');

const plans = {
  'Find new readers': [
    ['Clarify your reader hook', 'Write one sentence that names the kind of reader who will love this book and the feeling or experience they will get from it.'],
    ['Post a story-first teaser', 'Share a short hook about the conflict, character, or question behind the book. End with a question readers can answer.'],
    ['Find 3 reader communities', 'Identify three genre-relevant groups, creators, newsletters, podcasts, or communities. Observe first; contribute before promoting.'],
    ['Create a short-video concept', 'Film a 15–30 second video built around: “If you like [reader experience], this book is for you.”'],
    ['Start a weekly rhythm', 'Choose three repeatable marketing days: one reader conversation, one piece of content, and one outreach action.']
  ],
  'Increase sales': [
    ['Audit your sales page', 'Check that your cover, description, categories, price, and opening hook all promise the same reader experience.'],
    ['Create a conversion post', 'Lead with the strongest reason to read the book now, then give readers one clear path to the retailer page.'],
    ['Reuse your best hook', 'Turn your strongest book hook into three formats: text post, short video, and quote graphic concept.'],
    ['Reach warm readers', 'Invite existing readers or followers to share the book with one person who reads the genre.'],
    ['Track one signal', 'For the next seven days, track clicks or sales after each promotion so you learn which messages deserve repeating.']
  ],
  'Prepare for launch': [
    ['Define launch promise', 'Write the clearest one-sentence promise for the book: who it is for and why they should care.'],
    ['Build a launch content bank', 'Draft five hooks, three character/theme posts, and two short-video ideas before launch week.'],
    ['Recruit early readers', 'Make a list of potential ARC readers, reviewers, and genre creators you can approach personally.'],
    ['Plan launch week', 'Assign one meaningful action to each day instead of trying to promote everywhere at once.'],
    ['Prepare your retailer links', 'Create one simple place where readers can find the book and confirm every purchase link works.']
  ],
  'Get more reviews': [
    ['Make the ask easy', 'Write a brief, pressure-free review request that explains why reader reviews help independent authors.'],
    ['Contact recent readers', 'Personally reach out to readers who have already told you they enjoyed the book.'],
    ['Add a review reminder', 'Check that your ebook or print back matter politely invites readers to leave an honest review.'],
    ['Find genre reviewers', 'Identify five reviewers or book creators who actually cover your genre and review their submission rules.'],
    ['Follow up respectfully', 'Schedule one polite follow-up for review requests, then leave the decision with the reader.']
  ],
  'Build my author audience': [
    ['Choose your author themes', 'Pick three topics you can talk about repeatedly beyond “buy my book” — themes, genre interests, and your writing world.'],
    ['Start conversations', 'Comment thoughtfully on five posts from readers or creators in your genre without promoting yourself.'],
    ['Create a signature series', 'Choose one repeatable weekly post readers can recognize and look forward to.'],
    ['Show the person behind the books', 'Share one authentic behind-the-scenes detail about your writing process or inspiration.'],
    ['Invite the next connection', 'Give interested readers one simple next step: follow, join a list, or explore your books.']
  ]
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const genre = document.getElementById('genre').value.trim();
  const status = document.getElementById('status').value;
  const goal = document.getElementById('goal').value;
  const tasks = plans[goal] || plans['Find new readers'];

  heading.textContent = `${title}: your first 5 marketing actions`;
  summary.textContent = `${author}, this starter plan is focused on “${goal.toLowerCase()}” for your ${genre} book (${status.toLowerCase()}). The full AuthorLaunch product will make these recommendations more deeply personalized and turn them into a daily campaign.`;
  grid.innerHTML = tasks.map((task, index) => `<article class="plan-card"><span class="number">ACTION ${index + 1}</span><h3>${task[0]}</h3><p>${task[1]}</p></article>`).join('');
  results.classList.remove('hidden');
  results.scrollIntoView({behavior:'smooth'});
});

document.getElementById('reset-plan').addEventListener('click', () => {
  form.reset();
  results.classList.add('hidden');
  document.getElementById('book-form').scrollIntoView({behavior:'smooth'});
});
