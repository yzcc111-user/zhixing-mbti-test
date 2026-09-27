import { RESULT_CONTENT } from './results-data.js';

const AXES = {
  EI: { left: 'E', right: 'I', leftName: '外向', rightName: '内向', label: '精力来源' },
  SN: { left: 'S', right: 'N', leftName: '感觉', rightName: '直觉', label: '认知方式' },
  TF: { left: 'T', right: 'F', leftName: '思维', rightName: '情感', label: '决策方式' },
  JP: { left: 'J', right: 'P', leftName: '判断', rightName: '感知', label: '生活方式' }
};

const VERSIONS = {
  48: { label: '48 题速测版', minutes: '约 5 分钟', counts: { EI: 12, SN: 12, TF: 12, JP: 12 } },
  93: { label: '93 题标准版', minutes: '约 10 分钟', counts: { EI: 24, SN: 23, TF: 23, JP: 23 } },
  144: { label: '144 题进阶版', minutes: '约 15 分钟', counts: { EI: 36, SN: 36, TF: 36, JP: 36 } },
  200: { label: '200 题深度版', minutes: '约 20–25 分钟', counts: { EI: 50, SN: 50, TF: 50, JP: 50 } }
};

const QUESTION_PAIRS = {
  EI: [
    ['参加一场热闹活动后，我通常会感到更有精神。', '连续与很多人相处后，我通常需要独处恢复精力。'],
    ['遇到新想法时，我喜欢先说出来，在交流中逐渐理清。', '遇到新想法时，我更愿意先在心里想清楚再表达。'],
    ['进入陌生群体时，我往往会主动和别人开启话题。', '进入陌生群体时，我通常先观察，等合适的时机再开口。'],
    ['讨论问题时，实时对话常能激发我更多思路。', '讨论问题前，先独自整理文字或提纲会让我发挥更好。'],
    ['一天里频繁与人互动，通常能让我保持活跃。', '一天里频繁与人互动，通常会明显消耗我的注意力。'],
    ['我喜欢在人多的聚会中认识不同的人。', '比起大型聚会，我更喜欢少数人的深入交流。'],
    ['值得庆祝的事情发生时，我会想马上约人一起分享。', '值得庆祝的事情发生时，我更愿意先安静享受这份感受。'],
    ['需要快速说明一件事时，我通常更愿意直接打电话。', '需要说明一件事时，我通常更愿意先发文字消息。'],
    ['重要决定前，与可信的人边聊边想会帮助我判断。', '重要决定前，我需要一段不被打扰的时间独立推演。'],
    ['空闲周末里，丰富的社交安排常让我觉得充实。', '空闲周末里，留出大段独处时间会让我更舒服。'],
    ['出现分歧时，我倾向于尽快当面把问题说开。', '出现分歧时，我倾向于先整理感受与措辞再沟通。'],
    ['我比较适应能随时交流的开放式工作环境。', '我比较适应安静、边界清楚、少被打断的工作环境。'],
    ['旅行时，我常愿意主动与当地人或同行者交流。', '旅行时，我更享受自己观察和体验环境。'],
    ['加入新团队后，我会较快介绍自己并参与互动。', '加入新团队后，我通常先熟悉氛围和成员再投入。'],
    ['有好消息时，我会自然地和较多人分享。', '有好消息时，我通常只告诉少数亲近的人。'],
    ['参加行业活动或社交场合，对我来说通常很自然。', '参加行业活动或社交场合，通常需要我额外调动精力。'],
    ['清晨开始工作时，和人说说话能帮助我进入状态。', '清晨开始工作时，一段安静时间能帮助我进入状态。'],
    ['公开活动中有疑问时，我通常愿意当场提问。', '公开活动中有疑问时，我更可能会后单独询问或查找。'],
    ['完成有挑战的任务时，我喜欢和伙伴并肩推进。', '完成有挑战的任务时，我更喜欢拥有充分的独立空间。'],
    ['压力较大时，与人相处和说话能帮助我缓解。', '压力较大时，减少交流、独自整理更能帮助我恢复。'],
    ['培养兴趣时，我容易被社群、搭档或共同活动带动。', '培养兴趣时，我更享受按自己的节奏独自钻研。'],
    ['活动结束后，只要气氛不错，我通常还愿意多待一会儿。', '活动进行一段时间后，即使气氛不错，我也常想早点离开。'],
    ['我会比较直接地让周围人感受到自己的兴奋和热情。', '即使内心很兴奋，我的外在表达通常也比较克制。'],
    ['我喜欢及时得到他人的回应，再继续调整自己的做法。', '我更喜欢先形成较完整的判断，再去获取他人的回应。'],
    ['我倾向于维持较广的联系网络和较高的互动频率。', '我倾向于维持少量但稳定、深入的关系。']
  ],
  SN: [
    ['学习新内容时，我希望先看到清楚的步骤和实例。', '学习新内容时，我会先寻找背后的原理与整体结构。'],
    ['我容易注意到环境中具体而细微的变化。', '我经常从零散线索中联想到潜在趋势。'],
    ['面对任务时，我通常先确认现有资源和实际条件。', '面对任务时，我通常先想象它还能发展成什么。'],
    ['我更信任经过实践验证、能够重复的方法。', '即使旧方法有效，我也愿意尝试没有先例的新路径。'],
    ['描述一件事时，我习惯按实际发生的顺序展开。', '描述一件事时，我常先讲核心意义或整体图景。'],
    ['面对模糊要求，我会优先追问具体标准。', '面对模糊要求，我常能从开放空间里获得灵感。'],
    ['我更容易记住事实、细节和亲身经历。', '我更容易记住模式、隐喻和核心意思。'],
    ['复杂问题出现时，我喜欢把它拆成可以执行的小步骤。', '复杂问题出现时，我喜欢先寻找重新定义它的新视角。'],
    ['评价一个想法时，现实可行性通常是我的第一道标准。', '评价一个想法时，它能打开多少新可能更吸引我。'],
    ['我更愿意使用已经熟悉并掌握得很好的工具。', '我会被功能新颖、能改变工作方式的工具吸引。'],
    ['听别人讲述时，我会留意时间、地点和具体经过。', '听别人讲述时，我会留意动机、联系和隐藏含义。'],
    ['制定方案时，我倾向从已有数据和事实出发。', '制定方案时，我倾向从未来愿景倒推当前行动。'],
    ['我喜欢明确、直接、字面含义清楚的表达。', '我喜欢带有象征、联想和多层含义的表达。'],
    ['解决故障时，我会先检查最常见、最具体的原因。', '解决故障时，我会先思考不同问题是否来自同一模式。'],
    ['参观一个新地方时，我会记住实际布局和可见细节。', '参观一个新地方时，我会思考它的氛围和未来变化。'],
    ['阅读说明时，我通常按步骤逐项操作。', '阅读说明时，我常先浏览全貌，再按理解自行尝试。'],
    ['讨论工作时，我更关心现在到底要交付什么。', '讨论工作时，我更关心这件事长期会通向哪里。'],
    ['面对新政策，我会先确认具体规则会怎样执行。', '面对新政策，我会先推想它可能带来的连锁影响。'],
    ['整理资料时，我喜欢按清楚、稳定的类别归档。', '整理资料时，我喜欢按主题联系形成新的知识网络。'],
    ['选择方案时，我会认真比较可测量的成本与收益。', '选择方案时，我会重视尚未被证明但值得探索的空间。'],
    ['我通常先把眼前事情做准确，再考虑进一步创新。', '我通常先寻找更好的可能，再决定眼前步骤。'],
    ['别人提出宏大设想时，我会追问具体怎样落地。', '别人提出具体计划时，我会追问背后的目标和意义。'],
    ['我对熟练掌握现实技能、手感和操作过程很有满足感。', '我对理解概念体系、规律和新解释很有满足感。'],
    ['复盘经历时，我常从具体事件中总结可重复做法。', '复盘经历时，我常把事件连接成更大的发展脉络。'],
    ['我倾向优先处理看得见、能马上验证的问题。', '我倾向优先处理可能改变整体方向的关键假设。']
  ],
  TF: [
    ['做困难决定时，我会优先寻找一致、可解释的标准。', '做困难决定时，我会优先考虑它对具体人的影响。'],
    ['发生争论时，即使气氛紧张，我也希望把逻辑讲清楚。', '发生争论时，我会先保护关系，再继续处理分歧。'],
    ['别人向我倾诉时，我常会先帮助分析问题。', '别人向我倾诉时，我常会先回应对方的感受。'],
    ['我欣赏直接准确的反馈，即使听起来不够温和。', '我认为好的反馈应让对方感到被理解和尊重。'],
    ['分配资源时，我倾向采用对所有人一致的规则。', '分配资源时，我愿意根据每个人的处境作调整。'],
    ['我能比较自然地把问题本身与当事人的情绪分开。', '一个决定是否合理，常取决于它是否符合我的价值观。'],
    ['团队提出方案时，我会主动寻找漏洞和反例。', '团队提出方案时，我会主动观察谁的需要还没被照顾。'],
    ['面对批评时，我首先会判断内容是否成立。', '面对批评时，表达方式会明显影响我如何接收内容。'],
    ['判断工作成果时，我更看重标准、质量和有效性。', '判断工作成果时，我也会重视成员的投入与体验。'],
    ['如果规则合理，我认为不应因个人关系而改变。', '即使规则合理，我也认为特殊处境值得被单独考虑。'],
    ['讨论失败原因时，我会先梳理事实和因果。', '讨论失败原因时，我会先关注当事人的感受和承受力。'],
    ['我更容易被论证严密、证据充分的观点说服。', '我更容易被真诚、符合共同价值的观点打动。'],
    ['需要拒绝别人时，我会尽量明确说明边界和理由。', '需要拒绝别人时，我会格外在意如何减少对方的失落。'],
    ['同事犯错时，我倾向直接讨论怎样修正问题。', '同事犯错时，我倾向先让对方感到安全再讨论问题。'],
    ['我认为公平更接近于相同标准下的一致判断。', '我认为公平也包括理解不同起点与现实处境。'],
    ['我在辩论中可以反对观点，而不把它看作反对个人。', '观点冲突时，我很难完全忽略关系气氛的变化。'],
    ['选负责人时，我首先看能力、记录和决策质量。', '选负责人时，我也会重视其能否凝聚和照顾团队。'],
    ['朋友做出不理性的选择时，我会指出其中的问题。', '朋友做出不理性的选择时，我会先理解他为何这样选。'],
    ['作出取舍时，我通常愿意接受短期不舒服来换取长期合理。', '作出取舍时，我会警惕所谓长期合理是否伤害了重要的人。'],
    ['评价冲突双方时，我会尽量用同一套证据标准。', '评价冲突双方时，我会充分考虑各自的背景和感受。'],
    ['我欣赏能把个人好恶放到一边的决策者。', '我欣赏能让不同人都感到被尊重的决策者。'],
    ['当事实与人情冲突时，我通常更愿意遵从事实。', '当事实与人情冲突时，我通常会寻找兼顾关系的办法。'],
    ['给建议时，我倾向指出最有效或最合理的选择。', '给建议时，我倾向帮助对方找到真正愿意承担的选择。'],
    ['会议意见不一致时，我会推动比较方案的优劣。', '会议意见不一致时，我会推动澄清彼此真正重视什么。'],
    ['我更担心一个决定缺少逻辑和可执行性。', '我更担心一个决定忽略人的尊严和长期信任。']
  ],
  JP: [
    ['出发旅行前，我喜欢把关键安排提前确定。', '旅行时，我更喜欢根据当天状态临时决定。'],
    ['完成任务后再放松，会让我更踏实。', '保留选择空间，比尽早定案更让我自在。'],
    ['面对截止日期，我通常会提前安排推进节奏。', '临近截止日期的压力常能激发我的效率。'],
    ['计划突然改变时，我需要一点时间重新调整。', '意外变化常让我看到原本没有的机会。'],
    ['我习惯用清单、日历或明确节点管理事情。', '我更依赖现场判断，而不是细致的预先安排。'],
    ['做完决定后，我通常希望尽快进入执行。', '即使已经决定，我也会继续关注其他可能。'],
    ['清晰的规则和流程能让我更专注。', '过于固定的流程会让我觉得行动受限。'],
    ['我更喜欢稳定、可控的推进方式。', '我更喜欢边探索边修正方向。'],
    ['收到任务后，我会尽快确认范围和完成标准。', '收到任务后，我会先行动，在过程中逐步明确方向。'],
    ['工作区保持有序，会让我更容易集中注意力。', '只要需要的东西能找到，环境是否整齐并不重要。'],
    ['购物前，我通常会列出需要的物品或范围。', '购物时，我愿意根据现场发现随时改变主意。'],
    ['我喜欢提前知道一天大致会如何安排。', '我喜欢让一天保留较多未安排的时间。'],
    ['同时有多个任务时，我倾向按优先级逐一完成。', '同时有多个任务时，我倾向随状态在任务之间切换。'],
    ['会议结束前，我希望明确结论、负责人和下一步。', '会议结束时保留若干开放选项，对我来说很正常。'],
    ['我会把重要决定设置一个明确的截止时间。', '我不愿过早关闭选项，除非现实要求必须决定。'],
    ['家中或工作中的固定节奏让我感到安心。', '日程中出现临时变化通常不会让我困扰。'],
    ['开始长期项目时，我会先建立阶段目标。', '开始长期项目时，我愿意先尝试，再决定阶段怎样划分。'],
    ['我倾向先处理已经承诺的事项，再接受新机会。', '遇到更有吸引力的新机会时，我愿意重新安排原计划。'],
    ['别人迟迟不作决定时，我容易感到效率受影响。', '别人过早作决定时，我容易担心还有信息没有看到。'],
    ['假期开始前，我通常已经想好主要活动。', '假期开始后再看心情安排，通常更符合我的节奏。'],
    ['我喜欢把未完成事项尽快收尾并从清单中划掉。', '我可以同时保留多个进行中的事项，不急着全部收尾。'],
    ['文件、资料和约定有固定位置，会让我更省心。', '我习惯按当下使用需要临时组织文件和资料。'],
    ['有明确计划时，我通常不愿因小事频繁调整。', '出现新信息时，我通常愿意随时改变原先计划。'],
    ['面对未知任务，我会先建立一个可执行的框架。', '面对未知任务，我会先探索几种做法再决定框架。'],
    ['对我来说，确定完成比继续优化更多可能更重要。', '对我来说，保持可调整比尽快宣布完成更重要。']
  ]
};

const TYPE_COLORS = { NT: '#8176f2', NF: '#46d39a', SJ: '#4fa9e4', SP: '#e7b94d' };
const TYPES = new Set(Object.keys(RESULT_CONTENT.reports));
const STORAGE_KEY = 'typelens-progress-v2';
const state = { count: 144, questions: [], answers: [], index: 0, transitioning: false };

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const mean = values => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
const selectedPole = dimension => dimension.selected || (dimension.leftPercent >= 50 ? dimension.left : dimension.right);
const selectedPercent = dimension => selectedPole(dimension) === dimension.left ? dimension.leftPercent : dimension.rightPercent;

export function buildQuestions(count = 144) {
  const version = VERSIONS[count] || VERSIONS[144];
  const byAxis = Object.entries(AXES).map(([axis, definition]) => {
    const flattened = QUESTION_PAIRS[axis].flatMap((pair, pairIndex) => [
      { id: `${axis}-${pairIndex * 2 + 1}`, axis, pole: definition.left, text: pair[0] },
      { id: `${axis}-${pairIndex * 2 + 2}`, axis, pole: definition.right, text: pair[1] }
    ]);
    return flattened.slice(0, version.counts[axis]);
  });
  const questions = [];
  for (let index = 0; questions.length < count; index += 1) {
    byAxis.forEach(items => { if (items[index]) questions.push(items[index]); });
  }
  return questions;
}

export function scoreAnswers(questions, answers) {
  const buckets = Object.fromEntries(Object.keys(AXES).map(axis => [axis, { left: [], right: [], signed: [], evidence: { left: 0, right: 0, neutral: 0 } }]));
  questions.forEach((question, index) => {
    const value = clamp(Number(answers[index] ?? 0), -2, 2);
    const axis = AXES[question.axis];
    const bucket = buckets[question.axis];
    const signed = question.pole === axis.left ? value : -value;
    bucket[question.pole === axis.left ? 'left' : 'right'].push(signed);
    bucket.signed.push(signed);
    if (value === 0) bucket.evidence.neutral += 1;
    else {
      const support = value > 0 ? question.pole : (question.pole === axis.left ? axis.right : axis.left);
      bucket.evidence[support === axis.left ? 'left' : 'right'] += 1;
    }
  });

  const dimensions = Object.entries(AXES).map(([key, axis]) => {
    const bucket = buckets[key];
    const normalized = (mean(bucket.left) + mean(bucket.right)) / 2;
    const leftPercent = clamp(Math.round((normalized / 2 + 1) * 50), 0, 100);
    const signedTotal = bucket.signed.reduce((sum, value) => sum + value, 0);
    const lastSignal = [...bucket.signed].reverse().find(value => value !== 0) || 0;
    const selected = leftPercent > 50 ? axis.left : leftPercent < 50 ? axis.right : (signedTotal || lastSignal) >= 0 ? axis.left : axis.right;
    return { key, ...axis, leftPercent, rightPercent: 100 - leftPercent, selected, evidence: bucket.evidence, balanced: Math.abs(leftPercent - 50) < 6 };
  });
  return { type: dimensions.map(selectedPole).join(''), questionCount: questions.length, dimensions };
}

function saveProgress() {
  const hasAnswer = state.answers.some(value => value !== undefined && value !== null);
  try {
    if (hasAnswer) localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: state.count, answers: state.answers, index: state.index }));
    else localStorage.removeItem(STORAGE_KEY);
  }
  catch { /* Private and embedded browsers may disable storage. */ }
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && VERSIONS[saved.count] && Array.isArray(saved.answers) ? saved : null;
  } catch { return null; }
}

function showScreen(name) {
  ['start', 'test', 'result'].forEach(id => { document.getElementById(`${id}-screen`).hidden = id !== name; });
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  const heading = document.getElementById(`${name}-screen`).querySelector('h1');
  if (heading) window.requestAnimationFrame(() => {
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  });
}

function begin(count, saved = null) {
  state.count = Number(count);
  state.questions = buildQuestions(state.count);
  state.answers = saved?.answers?.slice(0, state.questions.length) || [];
  state.index = Math.min(saved?.index || 0, state.questions.length - 1);
  showScreen('test');
  renderQuestion();
}

function renderQuestion() {
  state.transitioning = false;
  const question = state.questions[state.index];
  const total = state.questions.length;
  const progress = Math.round((state.index / total) * 100);
  const axis = AXES[question.axis];
  document.getElementById('phase-name').textContent = axis.label;
  document.getElementById('progress-copy').textContent = `${state.index + 1} / ${total}`;
  document.getElementById('progress-fill').style.transform = `scaleX(${progress / 100})`;
  document.querySelector('.progress-track').setAttribute('aria-valuenow', String(progress));
  document.getElementById('question-count').textContent = `第 ${String(state.index + 1).padStart(2, '0')} 题`;
  document.getElementById('question-text').textContent = question.text;
  document.getElementById('question-axis').textContent = `${axis.label} · ${axis.left}/${axis.right}`;
  document.getElementById('back-btn').style.visibility = state.index ? 'visible' : 'hidden';
  const labels = ['非常不符合', '比较不符合', '不确定', '比较符合', '非常符合'];
  const values = [-2, -1, 0, 1, 2];
  document.getElementById('answer-grid').innerHTML = labels.map((label, index) => `<button class="answer${state.answers[state.index] === values[index] ? ' selected' : ''}" type="button" data-value="${values[index]}" aria-label="${label}"><span>${label}</span><span class="answer-key">${index + 1}</span></button>`).join('');
  document.querySelectorAll('.answer').forEach(button => button.addEventListener('click', () => chooseAnswer(Number(button.dataset.value))));
  if (!document.getElementById('test-screen').hidden) window.requestAnimationFrame(() => document.getElementById('question-text').focus({ preventScroll: true }));
}

function chooseAnswer(value) {
  if (state.transitioning) return;
  state.transitioning = true;
  state.answers[state.index] = value;
  saveProgress();
  document.querySelectorAll('.answer').forEach(element => {
    element.classList.toggle('selected', Number(element.dataset.value) === value);
    element.disabled = true;
  });
  window.setTimeout(() => {
    if (state.index < state.questions.length - 1) {
      state.index += 1;
      renderQuestion();
      saveProgress();
    } else finish();
  }, 130);
}

function finish() {
  const result = scoreAnswers(state.questions, state.answers);
  localStorage.removeItem(STORAGE_KEY);
  history.replaceState(null, '', location.pathname);
  renderResult(result);
  showScreen('result');
}

function reportIdentity(type) {
  const blocks = RESULT_CONTENT.reports[type] || RESULT_CONTENT.reports.INTJ;
  const texts = blocks.filter(block => block.kind !== 'table').map(block => block.text);
  const title = texts.find(text => text.startsWith(`${type} —`)) || type;
  const subtitle = texts.find(text => text.startsWith(`${type} ·`)) || '';
  const summary = blocks.find(block => block.kind === 'paragraph')?.text || '';
  return { blocks, title, subtitle, summary };
}

function renderBlockSequence(blocks) {
  let html = '';
  let listKind = null;
  let sectionOpen = false;
  let headingIndex = 0;
  const toc = [];
  const closeList = () => {
    if (listKind) html += listKind === 'bullet' ? '</ul>' : '</ol>';
    listKind = null;
  };
  const closeSection = () => {
    closeList();
    if (sectionOpen) html += '</section>';
    sectionOpen = false;
  };

  blocks.forEach(block => {
    if (block.kind === 'heading') {
      closeSection();
      const id = `report-section-${headingIndex += 1}`;
      toc.push({ id, text: block.text.replace(/（[^）]+）/g, '').replace(/：$/, '') });
      html += `<section class="doc-section" id="${id}"><h3>${escapeHtml(block.text)}</h3>`;
      sectionOpen = true;
      return;
    }
    if (!sectionOpen) {
      html += '<section class="doc-section doc-opening">';
      sectionOpen = true;
    }
    if (block.kind === 'bullet' || block.kind === 'number') {
      if (listKind !== block.kind) {
        closeList();
        listKind = block.kind;
        html += listKind === 'bullet' ? '<ul>' : '<ol>';
      }
      html += `<li>${escapeHtml(block.text.replace(/^•\s*/, '').replace(/^\d+\.\s*/, ''))}</li>`;
      return;
    }
    closeList();
    if (block.kind === 'table') {
      html += `<div class="table-scroll"><table><tbody>${block.rows.map(row => `<tr>${row.map((cell, index) => `<${index ? 'td' : 'th'}>${escapeHtml(cell)}</${index ? 'td' : 'th'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    } else if (block.kind === 'title') {
      html += `<h2 class="doc-type-title">${escapeHtml(block.text)}</h2>`;
    } else if (block.kind === 'subtitle') {
      html += `<p class="doc-subtitle">${escapeHtml(block.text)}</p>`;
    } else if (block.kind === 'function') {
      html += `<p class="doc-function">${escapeHtml(block.text)}</p>`;
    } else {
      html += `<p>${escapeHtml(block.text)}</p>`;
    }
  });
  closeSection();
  return { html, toc };
}

function renderResult(result) {
  const identity = reportIdentity(result.type);
  const group = `${result.type[1]}${result.type[2]}`;
  document.documentElement.style.setProperty('--type-accent', TYPE_COLORS[group] || '#8176f2');
  document.title = `${result.type} 人格报告 · 知型 TypeLens`;
  document.getElementById('result-type').textContent = result.type;
  document.getElementById('result-title').textContent = identity.title.replace(`${result.type} — `, '');
  document.getElementById('result-subtitle').textContent = identity.subtitle;
  document.getElementById('result-summary').textContent = identity.summary;
  document.getElementById('result-mode').textContent = VERSIONS[result.questionCount]?.label || `${result.questionCount || '分享'}题结果`;
  document.getElementById('result-ghost').textContent = result.type;
  const source = result.dimensions.map(dimension => `${selectedPole(dimension)} ${selectedPercent(dimension)}%`).join(' · ');
  document.getElementById('result-basis').textContent = `类型由四个维度中当前分数较高的一侧组合而成：${source}。百分比只描述本次作答倾向，不代表能力高低。`;
  document.getElementById('dimension-pills').innerHTML = result.dimensions.map(dimension => `<div class="dimension-pill"><span>${escapeHtml(dimension.label)}</span><b>${dimension.left}</b><i style="--position:${dimension.leftPercent}%"></i><b>${dimension.right}</b><em>${selectedPole(dimension)} ${selectedPercent(dimension)}%</em></div>`).join('');
  document.getElementById('axis-results').innerHTML = result.dimensions.map(dimension => {
    const evidence = dimension.evidence;
    const note = dimension.balanced ? '接近中间，可能随情境切换' : `当前更偏向 ${selectedPole(dimension)} · ${selectedPercent(dimension)}%`;
    return `<article class="axis-card"><div><span>${escapeHtml(dimension.label)}</span><strong>${dimension.left} / ${dimension.right}</strong></div><div class="axis-labels"><span>${dimension.leftName} ${dimension.leftPercent}%</span><span>${dimension.rightPercent}% ${dimension.rightName}</span></div><div class="axis-track"><i style="left:${dimension.leftPercent}%"></i></div><p>${note}</p><small>支持题数：${dimension.left} ${evidence?.left ?? '—'} · ${dimension.right} ${evidence?.right ?? '—'} · 中立 ${evidence?.neutral ?? '—'}</small></article>`;
  }).join('');
  const rendered = renderBlockSequence(identity.blocks);
  document.getElementById('document-intro').textContent = RESULT_CONTENT.intro.map(block => block.text).join(' · ');
  document.getElementById('full-report').innerHTML = rendered.html;
  document.getElementById('report-nav').innerHTML = rendered.toc.map(item => `<button type="button" data-report-target="${item.id}">${escapeHtml(item.text)}</button>`).join('');
  document.querySelectorAll('[data-report-target]').forEach(button => button.addEventListener('click', () => {
    document.getElementById(button.dataset.reportTarget)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }));
  document.getElementById('share-btn').dataset.payload = encodeResult(result);
}

export function encodeResult(result) {
  return btoa(unescape(encodeURIComponent(JSON.stringify({
    t: result.type,
    p: result.dimensions.map(dimension => dimension.leftPercent),
    q: result.questionCount,
    e: result.dimensions.every(dimension => dimension.evidence)
      ? result.dimensions.map(dimension => [dimension.evidence.left, dimension.evidence.right, dimension.evidence.neutral])
      : undefined
  }))));
}

export function decodeResult(payload) {
  try {
    const data = JSON.parse(decodeURIComponent(escape(atob(payload))));
    if (!Array.isArray(data.p) || data.p.length !== 4 || data.p.some(value => !Number.isFinite(value) || value < 0 || value > 100)) return null;
    if (data.q !== undefined && ![32, 48, 64, 93, 144, 200].includes(data.q)) return null;
    if (data.t !== undefined && !TYPES.has(data.t)) return null;
    const expectedCounts = VERSIONS[data.q]?.counts || (data.q === 32 ? { EI: 8, SN: 8, TF: 8, JP: 8 } : data.q === 64 ? { EI: 16, SN: 16, TF: 16, JP: 16 } : null);
    if (data.e !== undefined && (!expectedCounts || !Array.isArray(data.e) || data.e.length !== 4)) return null;
    const dimensions = Object.entries(AXES).map(([key, axis], index) => {
      const evidenceRow = data.e?.[index];
      if (evidenceRow && (!Array.isArray(evidenceRow) || evidenceRow.length !== 3 || evidenceRow.some(value => !Number.isInteger(value) || value < 0) || evidenceRow.reduce((sum, value) => sum + value, 0) !== expectedCounts[key])) throw new Error('invalid evidence');
      const selected = data.p[index] > 50 ? axis.left : data.p[index] < 50 ? axis.right : data.t?.[index] || axis.left;
      return { key, ...axis, leftPercent: data.p[index], rightPercent: 100 - data.p[index], selected, evidence: evidenceRow ? { left: evidenceRow[0], right: evidenceRow[1], neutral: evidenceRow[2] } : undefined, balanced: Math.abs(data.p[index] - 50) < 6 };
    });
    const type = dimensions.map(selectedPole).join('');
    return TYPES.has(type) ? { type, questionCount: data.q, dimensions } : null;
  } catch { return null; }
}

function toast(message) {
  const element = document.getElementById('toast');
  element.textContent = message;
  element.classList.add('show');
  window.setTimeout(() => element.classList.remove('show'), 1800);
}

function resetToStart() {
  localStorage.removeItem(STORAGE_KEY);
  history.replaceState(null, '', location.pathname);
  document.title = '知型 · 四维性格偏好测试';
  showScreen('start');
  updateResume();
}

function updateResume() {
  const saved = loadProgress();
  const card = document.getElementById('resume-card');
  card.hidden = !saved;
  if (saved) {
    document.getElementById('resume-copy').textContent = `已完成 ${saved.answers.filter(value => value !== undefined && value !== null).length} / ${saved.count} 题`;
    document.getElementById('resume-btn').onclick = () => begin(saved.count, saved);
  }
}

function init() {
  document.querySelectorAll('[data-start-count]').forEach(button => button.addEventListener('click', () => begin(Number(button.dataset.startCount))));
  document.getElementById('header-home-btn').addEventListener('click', () => {
    if (!document.getElementById('test-screen').hidden) saveProgress();
    showScreen('start');
    updateResume();
  });
  document.getElementById('back-btn').addEventListener('click', () => { if (state.index) { state.index -= 1; renderQuestion(); saveProgress(); } });
  document.getElementById('save-exit-btn').addEventListener('click', () => { saveProgress(); showScreen('start'); updateResume(); });
  document.getElementById('discard-btn').addEventListener('click', resetToStart);
  document.getElementById('restart-btn').addEventListener('click', resetToStart);
  document.getElementById('print-btn').addEventListener('click', () => window.print());
  document.getElementById('share-btn').addEventListener('click', async event => {
    const url = `${location.origin}${location.pathname}#share=${event.currentTarget.dataset.payload}`;
    const shareData = { title: `我的性格偏好：${document.getElementById('result-type').textContent}`, text: '这是我的知型四维性格偏好测试结果。', url };
    try {
      if (navigator.share) await navigator.share(shareData);
      else { await navigator.clipboard.writeText(url); toast('分享链接已复制'); }
    } catch (error) {
      if (error?.name !== 'AbortError') window.prompt('复制这个分享链接：', url);
    }
  });
  document.addEventListener('keydown', event => {
    if (!document.getElementById('test-screen').hidden && /^[1-5]$/.test(event.key)) chooseAnswer(Number(event.key) - 3);
  });
  const shared = location.hash.startsWith('#share=') ? decodeResult(location.hash.slice(7)) : null;
  if (shared) { renderResult(shared); showScreen('result'); }
  else updateResume();
}

if (typeof document !== 'undefined') init();
