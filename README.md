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
