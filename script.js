// Update Data
const updates = [
    {
        type: "EXPANSION UPDATE",
        title: "Update 1.1 — Institutional Expansion",
        description: "Major expansion to impeachment mechanics, Supreme Court charge branching, executive removal enforcement, and enhanced breaking news alerts.",
        release: "March 15, 2026 18:00:00"
    },
    {
        type: "SYSTEM BALANCE",
        title: "Update 1.2 — Legislative Timing Reform",
        description: "Adjusting bill voting durations, refining 75% supermajority instant pass triggers, and optimizing Senate trial pacing.",
        release: "April 19, 2026 18:00:00"
    },
    {
        type: "STRUCTURAL REMOVAL",
        title: "Update 1.3 — Redundant Office Removal",
        description: "Removing inactive executive positions and restructuring cabinet authority pathways.",
        release: "May 17, 2026 18:00:00"
    }
     {
        type: "LEGISLATIVE SESSION",
        title: "Congress In Session",
        description: "Congressional chambers activated. Legislative debate, impeachment routing, and amendment proposals are now live.",
        release: "June 21, 2026 18:00:00"
    },
    {
        type: "DEPARTMENT OF DEFENSE UPDATE",
        title: "To Server and Protect",
        description: "National infrastructure security overhaul. Emergency broadcast system activation, federal response routing, and server integrity reinforcement.",
        release: "July 19, 2026 18:00:00",
        emergency: true
    },
    {
        type: "SYSTEM EXPANSION",
        title: "Judicial Systems Expansion",
        description: "Supreme Court branch expansion and automated constitutional violation routing.",
        release: "August 16, 2026 18:00:00"
    }
];

let currentIndex = 0;

function loadUpdate(index) {
    const update = updates[index];

    document.getElementById("updateType").innerText = update.type;
    document.getElementById("updateTitle").innerText = update.title;
    document.getElementById("updateDescription").innerText = update.description;

    updateDate = new Date(update.release).getTime();
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % updates.length;
    document.querySelector(".update-overlay").style.opacity = 0;

    setTimeout(() => {
        loadUpdate(currentIndex);
        document.querySelector(".update-overlay").style.opacity = 1;
    }, 600);

}, 8000);

// Countdown System
let updateDate = new Date(updates[0].release).getTime();
const countdown = document.getElementById("countdown");

setInterval(function() {
    const now = new Date().getTime();
    const distance = updateDate - now;

    if (distance < 0) {
        countdown.innerHTML = "Update Released";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

}, 1000);

// Load First Update
loadUpdate(0);

// Roadmap
const roadmapItems = [
    "Judicial AI Case Handling",
    "Global Country Expansion System",
    "Expanded Amendment Proposal Editor",
    "Emergency Powers Simulation Framework",
    "International Treaty Voting Structure"
];

const roadmapContainer = document.getElementById("roadmapContainer");

roadmapItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "roadmap-card";
    div.innerText = item;
    roadmapContainer.appendChild(div);
});
