import { useMemo, useState } from "react";

const devices = [
  {
    id: "punched-media",
    name: "Punch Cards & Paper Tape",
    era: "1800s–1970s",
    icon: "▦",
    storageMethod: "Patterns of holes punched into stiff cards or long paper strips represented data and instructions.",
    uses: "Early tabulating machines, mainframes, census processing, and program input.",
    strengths: "Simple, readable by machines, and durable enough for manual handling.",
    limitations: "Very low capacity, slow to process, bulky in large collections, and easy to damage or misorder.",
    funFact: "A single misplaced or bent card could break the order of an entire program deck.",
    comparison: "This was the starting point: storage was physical, visible, and handled by people.",
    ratings: { speed: 1, capacity: 1, portability: 2, durability: 2 },
  },
  {
    id: "magnetic-tape",
    name: "Magnetic Tape",
    era: "1950s–present",
    icon: "◉",
    storageMethod: "Data is stored as magnetic patterns along a long strip of tape.",
    uses: "Mainframe storage, backups, archives, and large-scale data preservation.",
    strengths: "Higher capacity than punched media and cost-effective for long-term storage.",
    limitations: "Sequential access makes finding a specific file slower than random-access devices.",
    funFact: "Tape is still used today for enterprise backups because it is cheap at very large capacities.",
    comparison: "Compared with punched media, tape stored far more data in less physical space.",
    ratings: { speed: 2, capacity: 3, portability: 2, durability: 3 },
  },
  {
    id: "hard-disk-drive",
    name: "Hard Disk Drives",
    era: "1956–present",
    icon: "◌",
    storageMethod: "Spinning magnetic platters and moving read/write heads store and retrieve data randomly.",
    uses: "Personal computers, servers, databases, game consoles, and mass storage systems.",
    strengths: "Large capacity, random access, and a good cost-per-gigabyte ratio.",
    limitations: "Mechanical parts make HDDs slower and more vulnerable to shock than solid-state storage.",
    funFact: "Early hard drives were room-sized; modern drives can fit terabytes into a small desktop bay.",
    comparison: "Unlike tape, hard disks made it practical to jump directly to data instead of scanning from the start.",
    ratings: { speed: 3, capacity: 4, portability: 2, durability: 2 },
  },
  {
    id: "floppy-disk",
    name: "Floppy Disks",
    era: "1970s–2000s",
    icon: "▣",
    storageMethod: "A flexible magnetic disk inside a protective casing stores small amounts of data.",
    uses: "Software distribution, file transfer, boot disks, and school or office documents.",
    strengths: "Portable, affordable, and easy to use across many personal computers.",
    limitations: "Small capacity, slow transfer speed, and sensitive to magnets, dust, and bending.",
    funFact: "The save icon used in many apps still resembles a 3.5-inch floppy disk.",
    comparison: "Floppies brought storage from machine rooms to bags, desks, and classrooms.",
    ratings: { speed: 2, capacity: 1, portability: 4, durability: 2 },
  },
  {
    id: "optical-disc",
    name: "Optical Discs",
    era: "1980s–present",
    icon: "◎",
    storageMethod: "Lasers read microscopic marks or pits on a reflective disc surface.",
    uses: "Music, movies, software installers, backups, and console games.",
    strengths: "Cheap to mass-produce, removable, and useful for distributing media.",
    limitations: "Scratches, limited rewrite cycles, and slower access than internal drives.",
    funFact: "CDs, DVDs, and Blu-ray discs use similar optical principles but different densities.",
    comparison: "Compared with floppies, optical discs offered far more capacity for media and software.",
    ratings: { speed: 2, capacity: 3, portability: 4, durability: 3 },
  },
  {
    id: "flash-memory",
    name: "Flash Memory & Memory Cards",
    era: "1990s–present",
    icon: "▤",
    storageMethod: "Non-volatile memory cells keep data without power using electrical charge states.",
    uses: "Cameras, phones, embedded systems, portable devices, and removable storage.",
    strengths: "Small, light, silent, and resistant to mechanical shock.",
    limitations: "Limited write endurance and performance differences between low-end and high-end cards.",
    funFact: "Memory cards made digital cameras practical by replacing film with reusable storage.",
    comparison: "Flash memory removed the need for spinning parts, making storage smaller and tougher.",
    ratings: { speed: 4, capacity: 3, portability: 5, durability: 4 },
  },
  {
    id: "usb-flash-drive",
    name: "USB Flash Drives",
    era: "2000s–present",
    icon: "▰",
    storageMethod: "Flash memory is packaged with a USB interface for plug-and-play file transfer.",
    uses: "File sharing, installers, recovery tools, school files, and portable backups.",
    strengths: "Very portable, reusable, easy to connect, and widely compatible.",
    limitations: "Easy to lose, quality varies, and cheaper drives can have slow write speeds.",
    funFact: "USB drives quickly replaced floppy disks because they were smaller and held much more data.",
    comparison: "USB flash drives made removable storage faster, smaller, and more convenient than discs or floppies.",
    ratings: { speed: 4, capacity: 4, portability: 5, durability: 4 },
  },
  {
    id: "solid-state-drive",
    name: "Solid-State Drives",
    era: "2000s–present",
    icon: "▧",
    storageMethod: "Flash memory chips and a controller store data electronically with no moving parts.",
    uses: "Modern laptops, desktops, servers, operating systems, games, and high-speed applications.",
    strengths: "Fast access, silent operation, low power use, and strong shock resistance.",
    limitations: "Usually costs more per gigabyte than HDDs and has finite write endurance.",
    funFact: "Upgrading from an HDD to an SSD is one of the most noticeable speed boosts for an old computer.",
    comparison: "SSDs kept the capacity benefits of modern storage while removing the biggest mechanical bottleneck.",
    ratings: { speed: 5, capacity: 4, portability: 4, durability: 5 },
  },
  {
    id: "cloud-storage",
    name: "Cloud Storage",
    era: "2000s–present",
    icon: "☁",
    storageMethod: "Data is stored on remote servers and accessed through networks and internet services.",
    uses: "File syncing, collaboration, backups, web apps, enterprise systems, and media libraries.",
    strengths: "Accessible from many devices, scalable, and useful for collaboration and backup.",
    limitations: "Requires network access, depends on service reliability, and raises privacy/security concerns.",
    funFact: "The cloud still depends on physical storage devices inside real data centers.",
    comparison: "Cloud storage changed the idea of storage from a device you carry to a service you access.",
    ratings: { speed: 4, capacity: 5, portability: 5, durability: 5 },
  },
];

const metricLabels = {
  speed: "Speed",
  capacity: "Capacity",
  portability: "Portability",
  durability: "Durability",
};

function RatingBar({ label, value }) {
  return (
    <div className="storage-rating">
      <div className="storage-rating__label">
        <span>{label}</span>
        <strong>{value}/5</strong>
      </div>
      <div className="storage-rating__track" aria-hidden="true">
        <span style={{ width: `${value * 20}%` }} />
      </div>
    </div>
  );
}

export default function StorageTimeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedDevice = devices[selectedIndex];

  const progress = useMemo(() => {
    if (devices.length === 1) return 0;
    return (selectedIndex / (devices.length - 1)) * 100;
  }, [selectedIndex]);

  function goPrevious() {
    setSelectedIndex((current) => Math.max(current - 1, 0));
  }

  function goNext() {
    setSelectedIndex((current) => Math.min(current + 1, devices.length - 1));
  }

  return (
    <section className="storage-timeline" aria-label="Interactive storage timeline">
      <div className="storage-timeline__intro">
        <div className="storage-timeline__header-row">
          <div>
            <p className="storage-eyebrow">Interactive Timeline</p>
            <h2>Storage Through Time</h2>
          </div>
          <div className="storage-timeline__controls">
            <button
              type="button"
              onClick={goPrevious}
              disabled={selectedIndex === 0}
              aria-label="Previous milestone"
            >
              ← Prev
            </button>
            <span className="storage-timeline__step">
              {selectedIndex + 1} of {devices.length}
            </span>
            <button
              type="button"
              onClick={goNext}
              disabled={selectedIndex === devices.length - 1}
              aria-label="Next milestone"
            >
              Next →
            </button>
          </div>
        </div>
        <p>
          Click a milestone to see how each generation stored data, what it improved,
          and what trade-offs it still had.
        </p>
      </div>

      <div className="storage-timeline__track">
        <div className="storage-timeline__track-inner" style={{ "--progress": `${progress}%` }}>
          {devices.map((device, index) => (
            <button
              type="button"
              key={device.id}
              className={`storage-node ${index === selectedIndex ? "is-active" : ""}`}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={index === selectedIndex}
            >
              <span className="storage-node__icon">{device.icon}</span>
              <span className="storage-node__year">{device.era.split("–")[0]}</span>
              <span className="storage-node__name">{device.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="storage-detail-card">
        <div className="storage-detail-card__content">
          <div className="storage-detail-card__header">
            <div className="storage-detail-card__icon" aria-hidden="true">
              {selectedDevice.icon}
            </div>
            <div className="storage-detail-card__title-area">
              <p className="storage-eyebrow">{selectedDevice.era}</p>
              <h3>{selectedDevice.name}</h3>
            </div>
          </div>

          <div className="storage-detail-card__body-layout">
            <div className="storage-detail-card__details-col">
              <div className="storage-detail-grid">
                <article>
                  <h4>How it stores data</h4>
                  <p>{selectedDevice.storageMethod}</p>
                </article>
                <article>
                  <h4>Common uses</h4>
                  <p>{selectedDevice.uses}</p>
                </article>
                <article>
                  <h4>Strengths</h4>
                  <p>{selectedDevice.strengths}</p>
                </article>
                <article>
                  <h4>Limitations</h4>
                  <p>{selectedDevice.limitations}</p>
                </article>
              </div>
            </div>

            <div className="storage-detail-card__meta-col">
              <div className="storage-ratings" aria-label={`Ratings for ${selectedDevice.name}`}>
                {Object.entries(selectedDevice.ratings).map(([metric, value]) => (
                  <RatingBar key={metric} label={metricLabels[metric]} value={value} />
                ))}
              </div>

              <div className="storage-callout">
                <strong>Did you know?</strong>
                <span>{selectedDevice.funFact}</span>
              </div>

              <div className="storage-comparison-note">
                <strong>Compared to the previous generation:</strong> {selectedDevice.comparison}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
