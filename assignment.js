// let currentTab = 'all';
// const tabActive = ["bg-navy", "border-navy", "text-white"];
// const tabInactive = ['bg-transparent', 'text-slate-700', 'border-state-200']

// const allContainer = document.getElementById("all-container");
// const interviewContainer = document.getElementById("interview-container");
// const rejectContainer = document.getElementById("reject-container");
// const emptyState = document.getElementById("empty-state");

// function switchTab(tab){
// const tabs = ['all', 'interview', 'rejected'];
// currentTab = tab;

// for(const t of tabs) {
//     const tabName = document.getElementById("tab-" + t);
//     if(t === tab) {
        
//         tabName.classList.remove(...tabInactive);
//         tabName.classList.add(...tabActive);
//     }else{
//         tabName.classList.remove(...tabActive);
//         tabName.classList.add(...tabInactive);
//     }
// }

// const pages = [allContainer, interviewContainer, rejectContainer];
// for(const section of pages) {
//     section.classList.add('hidden');
// }

// emptyState.classList.add('hidden');

// if(tab === 'all') {
//     allContainer.classList.remove('hidden');
//     if(allContainer.children.length < 1){
//         emptyState.classList.remove('hidden');
//     }
// }else if(tab === 'interview') {
//     interviewContainer.classList.remove('hidden');
//     if(interviewContainer.children.length < 1){
//         emptyState.classList.remove('hidden');
//     }
// }else{
//     rejectContainer.classList.remove('hidden');
//     if(rejectContainer.children.length < 1){
//         emptyState.classList.remove('hidden');
//     }
// }
// updateStat();
// }

// switchTab(currentTab);

// const totalStat = document.getElementById('stat-total');
// const interviewStat = document.getElementById('stat-interview');
// const rejectStat = document.getElementById('stat-reject');
// const available = document.getElementById('available');

// totalStat.innerText = allContainer.children.length;

// document.getElementById('jobs-container').addEventListener('click', function(event) {
//     const clickedElement = event.target;
//     const card = clickedElement.closest(".card");
//     const parent =card.parentNode;
//     const status = card.querySelector('.apply');

//     if(clickedElement.classList.contains('interview')) {
//         status.innerText = 'Interviewed'
//         interviewContainer.appendChild(card);
//         // updateStat();
//     }
//     if(clickedElement.classList.contains('rejected')) {
//         status.innerText = 'Rejected'
//         rejectContainer.appendChild(card);
//         // updateStat();
//     }
//     if(clickedElement.classList.contains('delete')) {
//         parent.removeChild(card);
//         // updateStat();
//     }
//     updateStat();
// })

// function updateStat(){
//     // totalStat.innerText = allContainer.children.length;
//     // interviewStat.innerText = interviewContainer.children.length;
//     // rejectStat.innerText = rejectContainer.children.length;

//     const counts = {
//         all: allContainer.children.length,
//         interview: interviewContainer.children.length,
//         rejected: rejectContainer.children.length,
//     };

//     totalStat.innerText = counts.all;
//     interviewStat.innerText = counts.interview;
//     rejectStat.innerText = counts.rejected;

//     available.innerText = counts[currentTab];
//     if(counts[currentTab] < 1) {
//         emptyState.classList.remove('.hidden')
//     }{
//         emptyState.classList.add('.hidden')
//     }

// }
// updateStat();


let currentTab = 'all';

const tabActive = ["bg-navy", "border-navy", "text-white"];
const tabInactive = ['bg-transparent', 'text-slate-700', 'border-state-200'];

// =====================
// DOM Elements FIRST
// =====================
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");
const emptyState = document.getElementById("empty-state");

const totalStat = document.getElementById('stat-total');
const interviewStat = document.getElementById('stat-interview');
const rejectStat = document.getElementById('stat-reject');
const available = document.getElementById('available');


// =====================
// Functions
// =====================
function switchTab(tab){
    const tabs = ['all', 'interview', 'rejected'];
    currentTab = tab;

    for(const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        if(t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectContainer];
    for(const section of pages) {
        section.classList.add('hidden');
    }

    emptyState.classList.add('hidden');

    if(tab === 'all') {
        allContainer.classList.remove('hidden');
        if(allContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    } else if(tab === 'interview') {
        interviewContainer.classList.remove('hidden');
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    } else {
        rejectContainer.classList.remove('hidden');
        if(rejectContainer.children.length < 1){
            emptyState.classList.remove('hidden');
        }
    }

    updateStat();
}

function updateStat(){
    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectContainer.children.length,
    };

    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectStat.innerText = counts.rejected;

    available.innerText = counts[currentTab];

    if(counts[currentTab] < 1) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

// =====================
// Event Listener
// =====================
document.getElementById('jobs-container').addEventListener('click', function(event) {

    const clickedElement = event.target;
    const card = clickedElement.closest(".card");

    if(!card) return; // safety

    const parent = card.parentNode;
    const status = card.querySelector('.apply');

    if(clickedElement.classList.contains('interview')) {
        status.innerText = 'Interviewed'
        interviewContainer.appendChild(card);
    }

    if(clickedElement.classList.contains('rejected')) {
        status.innerText = 'Rejected'
        rejectContainer.appendChild(card);
    }

    if(clickedElement.classList.contains('delete')) {
        parent.removeChild(card);
    }

    updateStat();
});

// =====================
// INITIAL CALL LAST
// =====================
switchTab(currentTab);
updateStat();