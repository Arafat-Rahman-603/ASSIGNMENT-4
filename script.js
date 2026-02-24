const jobs = [
  {
    company: "Mobile First Corp",
    title: "React Native Developer",
    meta: "Remote • Full-time • $130,000 - $175,000",
    desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "not",
  },
  {
    company: "WebOps Agency",
    title: "Web Designer & Developer",
    meta: "Los Angeles, CA • Part-time • $80,000 - $120,000",
    desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "not",
  },
  {
    company: "DataViz Solutions",
    title: "Data Visualization Specialist",
    meta: "Boston, MA • Full-time • $125,000 - $165,000",
    desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "not",
  },
  {
    company: "CloudFirst Inc",
    title: "Backend Developer",
    meta: "Seattle, WA • Full-time • $140,000 - $190,000",
    desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "not",
  },
  {
    company: "Innovation Labs",
    title: "UI/UX Engineer",
    meta: "Austin, TX • Full-time • $110,000 - $150,000",
    desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "not",
  },
  {
    company: "MegaCorp Solutions",
    title: "JavaScript Developer",
    meta: "New York, NY • Full-time • $130,000 - $170,00",
    desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "not",
  },
  {
    company: "StartupXYZ",
    title: "Full Stack Engineer",
    meta: "Remote • Full-time • $120,000 - $160,000",
    desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "not",
  },
  {
    company: "TechCorp Industries",
    title: "Senior Frontend Developer",
    meta: "San Francisco, CA • Full-time • $130,000 - $175,000",
    desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "not",
  },
];

let filter = "all";

function setFilter(type, btn) {
  filter = type;

  document.querySelectorAll(".filterBtn").forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white", "border-blue-600");
    btn.classList.add("bg-white");
  });

  btn.classList.add("bg-blue-600", "text-white", "border-blue-600");
  btn.classList.remove("bg-white");

  renderJobs();
}

function renderJobs() {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  const filteredJobs = jobs.filter((job) => {
    if (filter === "all") return true;
    return job.status === filter;
  });

  if (filteredJobs.length === 0) {
    jobList.innerHTML = `
      <div class="bg-white border border-gray-200 rounded-xl p-10 text-center">
        <img class="w-20 mx-auto" src="./jobs.png" alt="">
        <p class="text-2xl text-[#002b5c] font-bold">No jobs available</p>
        <p class="text-md text-gray-400 mt-1">Check back soon for new job opportunities</p>
      </div>`;
    updateStats(0);
    return;
  }

  filteredJobs.forEach((job, index) => {
    jobList.innerHTML += `
    <div class="bg-white rounded-xl border border-gray-200 p-6">

      <div class="flex justify-between">
        <div>
          <h3 class="text-[#002b5c] font-semibold text-lg">${job.company}</h3>
          <p class="text-gray-600">${job.title}</p>
          <p class="text-gray-500 text-sm mt-1">${job.meta}</p>
        </div>

        <button onclick="deleteJob(${index})"
        class="w-8 h-8 flex items-center justify-center border rounded-full text-gray-400 hover:bg-gray-100"><i class="fa-solid fa-trash-can"></i></button>
      </div>

      <span class="inline-block mt-3 text-xs px-3 py-1 rounded ${statusStyle(job.status)}">
        ${statusText(job.status)}
      </span>

      <p class="text-gray-600 text-sm mt-3">${job.desc}</p>

      <div class="flex gap-2 mt-4">
        <button onclick="setStatus(${index}, 'interview')"
        class="border cursor-pointer border-green-500 text-green-600 px-3 py-1 rounded text-sm">INTERVIEW</button>

        <button onclick="setStatus(${index}, 'rejected')"
        class="border cursor-pointer border-red-500 text-red-600 px-3 py-1 rounded text-sm">REJECTED</button>
      </div>

    </div>`;
  });

  updateStats(filteredJobs.length);
}

function statusText(status) {
  if (status === "interview") return "INTERVIEW";
  if (status === "rejected") return "REJECTED";
  return "NOT APPLIED";
}

function statusStyle(status) {
  if (status === "interview") return "bg-green-50 text-green-700";
  if (status === "rejected") return "bg-red-50 text-red-600";
  return "bg-blue-50 text-blue-700";
}

function setStatus(index, status) {
  jobs[index].status = status;
  renderJobs();
}

function deleteJob(index) {
  jobs.splice(index, 1);
  renderJobs();
}

