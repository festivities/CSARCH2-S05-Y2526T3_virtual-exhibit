<div align="center">

# Bytes of the Past: The Evolution of Storage Devices

**CSARCH2 Virtual Exhibit Case Proposal**

Abdulrahman, Bilanes, Nicolas, Serra, Valle

**S05 - Group 8**

</div>

---

# Development Documentation

## Final Website Update

For the final version of our CSARCH2 virtual exhibit, we developed the website based on our original proposal, **"Bytes of the Past: The Evolution of Storage Devices."** The main goal was to turn our concept into a working Astro-based exhibit page that explains how storage technology evolved from physical punched media to modern cloud storage.

## Development Progress

We created the main exhibit page in `src/pages/storage-evolution.mdx`. This page contains the introduction, interactive storage timeline, storage device deep-dive cards, comparison table, conclusion, and references. We also created reusable components to organize the exhibit content more clearly.

The interactive timeline was implemented in `src/components/StorageTimeline.jsx`. It allows users to click through storage milestones and view details such as storage method, common uses, strengths, limitations, fun facts, and comparison ratings. The ratings compare each storage device based on speed, capacity, portability, and durability.

We also created `src/components/StorageDeviceCard.astro` for the storage device deep-dive section. This helped keep the page organized and made the device cards easier to reuse and style.

On this branch, we extended the timeline with interactive 3D models for each storage device, rendered with `<model-viewer>` so visitors can rotate and inspect each device instead of only seeing an icon.

## Aha Moments

One important realization was that storage devices are not only about capacity. Each generation improved different parts of computer architecture, such as access speed, portability, durability, reliability, and cost. For example, magnetic tape had good capacity for backups but was limited by sequential access. Hard disk drives improved random access, while SSDs removed moving parts and improved speed and durability.

Another moment was that cloud storage is not purely “invisible” storage. Even if users access it online, it still depends on physical storage devices inside data centers. This helped us connect modern storage back to the same architectural ideas found in older devices.

## Things Learned

Through this project, we learned how to organize technical information into a virtual exhibit format. We also learned how to combine Astro, MDX, React JSX, and CSS in one project. Astro and MDX were useful for writing the main exhibit content, while React was useful for the interactive timeline.

We also learned the importance of responsive design. Since the exhibit should work on different screen sizes, the layout needed to adjust for desktop, tablet, and mobile views. This included making the timeline easier to use and making the content readable on smaller screens.

## Challenges Encountered

One challenge was balancing technical accuracy with readability. Since the website is a virtual exhibit, the information had to be understandable to visitors while still being technically correct. We avoided making the explanations too long, but we still included important details such as storage method, strengths, limitations, and historical use.

Another challenge was layout spacing. The original template included a sidebar table of contents and a right-side padder element, which affected how the main content was centered. We adjusted the styling through CSS while keeping the required layout files unchanged.

We also had to make sure the project could still run correctly using Node.js and npm. After installing dependencies, we tested the website locally and checked that the build command worked.

## Creative Development

The visual direction of the website follows a retro museum and futuristic technology theme. The dark background, cyan accents, green labels, and card-based layout were used to make the exhibit feel like a digital museum display. The timeline format was chosen because it clearly shows the historical development of storage devices from older physical media to modern network-based storage.

The exhibit also includes “Then vs. Now,” fun facts, comparison ratings, and a summary table to make the information easier to explore instead of presenting everything as plain text.


**Bytes of the Past: The Evolution of Storage Devices**  
CSARCH2 Virtual Exhibit Case Proposal  
**Abdulrahman, Bilanes, Nicolas, Serra, Valle**  
**S05 \- Group 8**

_**Topic Theme**_

Our group’s virtual exhibit will focus on the historical evolution of computer storage devices, from early physical storage methods such as punch cards and paper tape to modern solid-state drives and cloud storage. The exhibit will show how storage technology has evolved across generations and how each device has improved the way computers save, access, and preserve data.

The main theme of the exhibit is **“how computers learned to remember.”** Storage is an important part of computer architecture because computers need a way to keep programs, files, instructions, and data even after power is turned off. Through this exhibit, visitors will see how storage devices became smaller, faster, more portable, more durable, and capable of holding much larger amounts of data.

The exhibit will cover the following storage devices:

- **Punch cards/paper tape**
- **Magnetic tape**
- **Hard disk drives**
- **Floppy disks**
- **Optical discs**
- **Flash memory/memory cards**
- **USB flash drives**
- **Solid-state drives**
- **Cloud storage**

Each storage device will be presented as part of a historical timeline. The exhibit will explain what the device is, how it stores data, why it was important during its time, and how it contributed to the development of modern computing.

_**Tech Stack Plan**_

The group will follow the provided Astro virtual museum template so that the exhibit remains compatible with the central website when all group repositories are merged.

**Planned Technologies**

| Project Part                      | Planned Tool                                              |
| --------------------------------- | --------------------------------------------------------- |
| Main framework                    | Astro 6                                                   |
| Runtime environment               | Node.js 26                                                |
| Main exhibit content              | MDX                                                       |
| Interactive component             | React JSX                                                 |
| Styling                           | CSS following the provided museum template                |
| Version control and documentation | GitHub                                                    |
| Media assets                      | Images, icons, diagrams, and storage device illustrations |

**Planned File Structure**

```
src/
├── components/
│   ├── StorageTimeline.jsx
│   └── StorageDeviceCard.astro
├── layouts/
│   └── ExhibitLayout.astro
└── pages/
    └── storage-evolution.mdx
```

The main exhibit page will be placed in _src/pages/storage-evolution.mdx_. The interactive timeline will be placed in _src/components/StorageTimeline.jsx_. Additional visual cards or reusable display sections may be created as Astro components.

_**Proposed Interactive Element**_

**Interactive Element: “Storage Through Time” Timeline**

    The timeline will be designed as a self-contained React component embedded in the MDX page, so it can be merged into the central Astro museum website without affecting other exhibit pages.

The main interactive element of the virtual exhibit will be a clickable storage timeline called **“Storage Through Time.”** This timeline is not meant to include every storage technology ever invented. Instead, it focuses on major historical milestones that clearly show how storage evolved from physical punched media to magnetic, optical, flash-based, solid-state, and cloud-based storage. Visitors will see a timeline showing the development of computer storage devices in chronological order:

- **Punch cards/paper tape**
- **Magnetic tape**
- **Hard disk drives**
- **Floppy disks**
- **Optical discs**
- **Flash memory/memory cards**
- **USB flash drives**
- **Solid-state drives**
- **Cloud storage**

Each timeline node will be clickable. When a visitor clicks a storage device, a detailed information card will appear or expand. The card will include:

- **Name of the storage device**
- **Image or icon of the device**
- **Historical era or approximate period of use**
- **Method of storing data**
- **Common use cases**
- **Strengths**
- **Limitations**
- **A short, fun fact**
- **A simple comparison to the previous storage generation**

For example, clicking Punch Cards / Paper Tape will show how early machines used punched holes to represent data. Clicking on Hard Disk Drive will show how spinning magnetic platters allowed computers to store much larger amounts of data. Clicking Flash Memory / Memory Cards will show how storage became smaller and more portable. Clicking Solid-State Drive will show how flash-based storage improved speed and durability, while clicking Cloud Storage will show how modern storage can be accessed through networks and online services.

**Interactive Behavior**

The interactive timeline will include the following behaviors:

1. **Click-to-view details**  
   Users can click a storage device to display its information card.
2. **Highlighted selection**  
   The selected device will be visually highlighted, so users know which era they are viewing.
3. **Previous and next buttons**  
   Users can move through the timeline step by step.
4. **Comparison indicators**  
   Each device card will show simple ratings for speed, capacity, portability, and durability.
5. **Responsive interaction**  
   On desktop, the timeline will appear horizontally. On mobile, it will become a vertical timeline for easier scrolling and tapping.

This interactive element is detailed enough for evaluation because it shows the planned user actions, visual behavior, content structure, and compatibility with the central Astro museum website.

**Mobile-Responsive Layout**

The exhibit will be designed to work on desktop, tablet, and mobile screens.

**Desktop Layout**

On larger screens, the exhibit will use:

- A wide hero section with the exhibit title and subtitle
- A horizontal interactive timeline
- Side-by-side image and text sections
- Storage device cards arranged in rows
- A comparison section for speed, capacity, portability, and durability
- A conclusion section

**Mobile Layout**  
On smaller screens, the exhibit will use:

- A single-column layout
- A vertical timeline instead of a horizontal timeline
- Storage cards stacked one after another
- Larger buttons for easier tapping
- Images placed above text
- Shorter paragraphs for better readability

This ensures that the exhibit remains readable and usable even on phones.

_**Tentative Style Guide Snapshot – Proposed Virtual Exhibit Design Layout**_

**Visual Theme**

**Retro Museum \+ Futuristic Technology**  
The exhibit will begin with a more historical look for older storage devices, then gradually shift into a cleaner and more modern digital style for newer storage devices. This supports the idea that storage technology evolved from physical media to advanced solid-state technology.

**Color Palette**

| Element                     | Proposed Color Style                 |
| --------------------------- | ------------------------------------ |
| Main background             | Dark navy or charcoal                |
| Main text                   | White or light gray                  |
| Accent color                | Cyan or electric blue                |
| Historical storage sections | Beige, brown, or muted gold          |
| Modern storage sections     | Blue, silver, or neon green          |
| Timeline line               | Metallic gray or glowing blue        |
| Information cards           | Dark gray panels with subtle borders |

**Typography**

- Headings: bold sans-serif font
- Body text: clean readable sans-serif font
- Labels and small details: optional terminal-inspired or pixel-inspired font

**Visual Elements**

The exhibit may use:

- Timeline nodes
- Storage device icons
- Punch card paper texture
- Magnetic tape reel illustrations
- Disk and drive icons
- Circuit-like lines
- Museum-style information cards
- “Did You Know?” trivia boxes
- Then-vs-now comparison panels

**Proposed Layout Flow**

1. **Hero Section**
   1. Large title: **Bytes of the Past: The Evolution of Storage Devices**  
      2. Subtitle: **A virtual exhibit on how computers learned to store more data, faster and smaller, across generations.**
2. **Introduction Section**
   1. Brief explanation of storage and why it matters in computer architecture.
3. **Interactive Timeline Section**
   1. Clickable timeline showing the major storage milestones from punched media to cloud storage.
4. **Storage Device Deep-Dive Section**
   1. Short museum-style cards explaining each device.
5. **Comparison Section**
   1. Simple comparison of storage devices based on speed, capacity, portability, and durability.
6. **Conclusion Section**
   1. Summary explaining how storage history shows the continuous goal of computer architecture: making systems smaller, faster, more reliable, and more capable.

## References

- Computer History Museum. (n.d.). *Memory & storage: Timeline of computer history*. https://www.computerhistory.org/timeline/memory-storage/
- Computer memory: Auxiliary memory. (n.d.). In *Encyclopædia Britannica*. Retrieved July 3, 2026, from https://www.britannica.com/technology/computer-memory/Auxiliary-memory
- IBM. (n.d.). *IBM 350 disk storage unit (RAMAC)*. https://www.ibm.com/history/ramac
- Microsoft. (n.d.). *Describe cloud concepts*. Microsoft Learn. Retrieved July 3, 2026, from https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/
- Sketchfab. (n.d.). *3D models of storage devices* \[3D models\]. Individual model attributions appear under each 3D preview in the interactive timeline. https://sketchfab.com

## Disclosure on AI
As per the syllabus, AI usage is completely banned in case project 2. AI/LLM tools were not utilized in the development of this exhibit.
