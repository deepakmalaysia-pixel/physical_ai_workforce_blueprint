const specialisations = [
  ["Embedded Robotics","C/C++, microcontrollers, RTOS, CAN, sensors and real-time control."],
  ["Robotics Software","Linux, Python/C++, ROS 2, simulation, perception and integration."],
  ["Computer Vision & AI","Vision models, perception, object detection, tracking and edge inference."],
  ["Autonomous Systems","SLAM, localisation, sensor fusion, planning and navigation."],
  ["Controls & Motion","Motor control, actuators, feedback systems, kinematics and dynamics."],
  ["Industrial Automation","PLC, industrial robots, machine vision, networks and commissioning."]
];

const jobs = [
  ["Embedded Robotics Engineer","Embedded software, RTOS, MCUs, sensors, buses and robot controllers."],
  ["Robotics Software Engineer","ROS 2, Linux, robot integration, simulation and autonomy."],
  ["Computer Vision / AI Engineer","Perception, vision, ML inference and edge AI."],
  ["Controls Engineer","Motion control, motors, actuators, feedback and optimisation."],
  ["ADAS / Autonomous Driving Engineer","Sensors, perception, planning, vehicle control and validation."],
  ["Robot Integration / Commissioning Engineer","Deployment, calibration, integration, testing and site commissioning."],
  ["Robot Maintenance / Service Engineer","Diagnostics, preventive maintenance, electrical and mechanical service."],
  ["Industrial Automation Engineer","PLC, robotics, machine vision, SCADA and industrial networking."],
  ["AI / Robotics Test & Validation Engineer","Simulation, test automation, safety, verification and validation."]
];

const companies = [
  {name:"Tata Elxsi",sector:"Engineering & Technology",website:"https://www.tataelxsi.com/",careers:"https://www.tataelxsi.com/careers",skills:"AI, robotics, embedded, ADAS, automotive software"},
  {name:"KPIT Technologies",sector:"Engineering & Technology",website:"https://www.kpit.com/",careers:"https://www.kpit.com/careers/",skills:"automotive software, autonomous driving, EV, embedded"},
  {name:"Tata Motors",sector:"Automotive & EV",website:"https://www.tatamotors.com/",careers:"https://careers.tatamotors.com/",skills:"engineering, R&D, manufacturing, EV, software"},
  {name:"Bosch India",sector:"Engineering & Technology",website:"https://www.bosch.in/",careers:"https://www.bosch.in/careers/",skills:"IoT, e-mobility, hardware, software, manufacturing"},
  {name:"Ather Energy",sector:"Automotive & EV",website:"https://www.atherenergy.com/",careers:"https://careers.atherenergy.com/",skills:"EV, embedded, software, controls, manufacturing"},
  {name:"Ola Electric",sector:"Automotive & EV",website:"https://www.olaelectric.com/",careers:"https://www.olaelectric.com/careers",skills:"EV, R&D, technology, manufacturing, components"},
  {name:"Mahindra Group",sector:"Automotive & EV",website:"https://www.mahindra.com/",careers:"https://www.mahindra.com/career",skills:"automotive, technology, AI, manufacturing, mobility"},
  {name:"Hyundai Motor India",sector:"Automotive & EV",website:"https://www.hyundai.com/in/en",careers:"https://www.hyundai.com/in/en/hyundai-story/career/overview",skills:"automotive engineering, R&D, manufacturing, mobility"}
];

function renderSimple(items, target){
  document.getElementById(target).innerHTML = items.map(x =>
    `<article class="card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`
  ).join("");
}
renderSimple(specialisations,"specialisationGrid");
renderSimple(jobs,"jobGrid");

function renderCompanies(){
  const q = document.getElementById("companySearch").value.toLowerCase().trim();
  const sector = document.getElementById("companySector").value;
  const filtered = companies.filter(c =>
    (!sector || c.sector===sector) &&
    (!q || `${c.name} ${c.sector} ${c.skills}`.toLowerCase().includes(q))
  );
  document.getElementById("companyGrid").innerHTML = filtered.map(c => `
    <article class="card company-card">
      <h3>${c.name}</h3>
      <div class="company-meta">${c.sector}</div>
      <p>${c.skills}</p>
      <div class="company-links">
        <a href="${c.website}" target="_blank" rel="noopener noreferrer">Official Website ↗</a>
        <a href="${c.careers}" target="_blank" rel="noopener noreferrer">Careers ↗</a>
      </div>
    </article>`).join("");
}
document.getElementById("companySearch").addEventListener("input",renderCompanies);
document.getElementById("companySector").addEventListener("change",renderCompanies);
renderCompanies();
