

import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaTools } from 'react-icons/fa';

// Define the props type for dynamic routes
type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

const guides: { [key: string]: { title: string; content: React.ReactNode } } = {
  'fixing-slow-pc': {
    title: 'Fixing a Slow PC',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Overview</h2>
          <p className="text-white/80">
            Is your PC taking forever to load programs or freezing during simple tasks? A slow computer is often caused by cluttered files, too many startup programs, or outdated software. This guide walks you through easy steps to speed things up, no tech expertise required.
          </p>
          <img
            src="/images/slow-pc.png"
            alt="Slow PC illustration"
            className="rounded-lg shadow-lg my-4 max-w-full h-auto"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 1: Clear Junk Files</h2>
          <p className="text-white/80">
            Temporary files, browser caches, and old downloads can pile up and slow your PC. Windows has a built-in tool called Disk Cleanup to remove them safely.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Open Disk Cleanup: Press the Windows key, type “Disk Cleanup,” and select it.
            </li>
            <li>
              Choose your main drive (usually C:). It’ll scan for unneeded files.
            </li>
            <li>
              Check boxes like “Temporary files,” “Recycle Bin,” and “Thumbnails.” Review the list to avoid deleting important files.
            </li>
            <li>Click “OK” and then “Delete Files” to clean up.</li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Note</strong>: For deeper cleaning, consider{' '}
            <a
              href="https://www.ccleaner.com/ccleaner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              CCleaner
            </a>{' '}
            (use the free version), but always double-check what you’re deleting.
          </p>
          <img
            src="/images/disk-cleanup.png"
            alt="Disk Cleanup tool"
            className="rounded-lg shadow-lg my-4 max-w-full h-auto"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 2: Manage Startup Programs</h2>
          <p className="text-white/80">
            Some programs automatically launch when you start your PC, slowing down boot time and hogging resources. You can disable unnecessary ones to improve performance.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Open Task Manager: Right-click the taskbar and select “Task Manager” or press Ctrl+Shift+Esc.
            </li>
            <li>
              Click the “Startup” tab (or “Startup Apps” in Windows 11). You’ll see a list of programs and their “Startup impact” (Low, Medium, High).
            </li>
            <li>
              Select programs with “High” or “Medium” impact that you don’t need at startup (e.g., Spotify, Adobe Reader). Click “Disable” or right-click and choose “Disable.”
            </li>
            <li>Restart your PC to see the difference.</li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Tip</strong>: Don’t disable antivirus software or Windows services. If unsure, leave it enabled.
          </p>
          <img
            src="/images/task-manager.png"
            alt="Task Manager Startup tab"
            className="rounded-lg shadow-lg my-4 max-w-full h-auto"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 3: Update Your System</h2>
          <p className="text-white/80">
            Outdated Windows versions or drivers can cause slowdowns. Keeping your system updated ensures better performance and security.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Open Settings: Press Windows + I or search for “Settings” in the Start menu.
            </li>
            <li>
              Go to “Windows Update” (or “Update & Security” in older versions) and click “Check for updates.”
            </li>
            <li>
              Install any available updates, including optional driver updates. Restart your PC if prompted.
            </li>
            <li>
              For graphics drivers, visit{' '}
              <a
                href="https://www.nvidia.com/en-us/geforce/drivers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                NVIDIA
              </a>{' '}
              or{' '}
              <a
                href="https://www.amd.com/en/support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                AMD
              </a>{' '}
              for the latest versions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">When to Seek Help</h2>
          <p className="text-white/80">
            If your PC is still slow after these steps, it might have deeper issues like malware, failing hardware, or a need for an SSD upgrade. Contact{' '}
            <a
              href="/contact"
              className="text-cyan-400 hover:underline"
            >
              Xtremery in DeLand, FL
            </a>{' '}
            for expert diagnosis and repair. We’ll get your PC running like new!
          </p>
        </section>
      </div>
    ),
  },
  'troubleshooting-blue-screen': {
    title: 'Troubleshooting Blue Screen Errors',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Overview</h2>
          <p className="text-white/80">
            A Blue Screen of Death (BSOD) is Windows’ way of saying something went seriously wrong. It’s often caused by faulty drivers, hardware issues, or software conflicts. This guide helps you identify and fix common causes, with steps simple enough for beginners.
          </p>
          <img
            src="/images/blue-screen.png"
            alt="Blue Screen of Death example"
            className="rounded-lg shadow-lg my-4 max-w-full h-auto"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 1: Note the Error Code</h2>
          <p className="text-white/80">
            When a blue screen appears, it usually shows an error code or message (e.g., “CRITICAL_PROCESS_DIED”). This clue helps identify the problem.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>Take a photo of the screen or write down the error code/message.</li>
            <li>
              Search the code on Microsoft’s support site:{' '}
              <a
                href="https://support.microsoft.com/en-us/windows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                support.microsoft.com
              </a>.
            </li>
            <li>If the PC restarts too quickly, disable automatic restarts:</li>
            <ul className="list-disc pl-6">
              <li>Right-click “This PC” {'>'} “Properties” {'>'} “Advanced system settings.”</li>
              <li>Under “Startup and Recovery,” click “Settings.”</li>
              <li>Uncheck “Automatically restart” and click OK.</li>
            </ul>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 2: Boot into Safe Mode</h2>
          <p className="text-white/80">
            Safe Mode starts Windows with minimal drivers, helping you troubleshoot software issues.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Restart your PC and press F8 (or Shift + F8) repeatedly before Windows loads. If that doesn’t work, try:
            </li>
            <ul className="list-disc pl-6">
              <li>Go to Settings {'>'} System {'>'} Recovery {'>'} “Restart now” under “Advanced startup.”</li>
              <li>Choose “Troubleshoot” {'>'} “Advanced options” {'>'} “Startup Settings” {'>'} “Restart.”</li>
              <li>Select “4” for Safe Mode.</li>
            </ul>
            <li>In Safe Mode, check if the blue screen still occurs.</li>
            <li>
              Uninstall recent software: Go to Control Panel {'>'} Programs {'>'} Uninstall a program, and remove anything installed before the issue started.
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Note</strong>: Safe Mode looks basic (low resolution, no fancy graphics) — that’s normal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 3: Run Diagnostics</h2>
          <p className="text-white/80">
            Hardware issues like faulty RAM or a failing hard drive can cause blue screens. Windows has tools to check these.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Test RAM: Search for “Windows Memory Diagnostic” in the Start menu, select it, and choose “Restart now and check for problems.”
            </li>
            <li>
              Check your hard drive: Open Command Prompt (search “cmd,” right-click, “Run as administrator”) and type{' '}
              <code className="bg-gray-800 px-1 rounded">chkdsk /f C:</code>. Press Y to schedule a check on restart.
            </li>
            <li>Restart your PC to run the diagnostics.</li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Tip</strong>: If diagnostics show errors, note them down for professional repair.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">When to Seek Help</h2>
          <p className="text-white/80">
            If blue screens continue, you might have a failing component or complex driver issue. Reach out to{' '}
            <a
              href="/contact"
              className="text-cyan-400 hover:underline"
            >
              Xtremery in DeLand, FL
            </a>{' '}
            for advanced diagnostics and repair. We’ll pinpoint the cause and fix it fast.
          </p>
        </section>
      </div>
    ),
  },
  'upgrading-ram': {
    title: 'Upgrading Your RAM',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Overview</h2>
          <p className="text-white/80">
            Adding more RAM (Random Access Memory) can make your PC faster, especially for multitasking or heavy programs like video editing software. This guide shows you how to choose and install RAM safely, even if you’ve never opened a PC before.
          </p>
          <img
            src="/images/ram-upgrade.png"
            alt="RAM module installation"
            className="rounded-lg shadow-lg my-4 max-w-full h-auto"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 1: Check Compatibility</h2>
          <p className="text-white/80">
            RAM must match your motherboard’s specifications (e.g., DDR4 or DDR5, speed, and capacity). Choosing the wrong type can damage your PC or simply not work.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Use Crucial’s System Scanner to find compatible RAM:{' '}
              <a
                href="https://www.crucial.com/store/systemscanner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Download it here
              </a>. Run the tool, and it’ll list RAM options for your PC.
            </li>
            <li>
              Alternatively, check your motherboard manual or manufacturer’s website for supported RAM types. Look for model number (e.g., “Asus ROG Strix B550-F”).
            </li>
            <li>
              Confirm your PC’s current RAM: Right-click “This PC” {'>'} “Properties” to see installed RAM (e.g., 8GB). Aim to add similar or higher capacity (e.g., 16GB total).
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Note</strong>: Buy RAM in pairs (e.g., 2x8GB) for best performance, and ensure they match in speed and brand.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 2: Prepare for Installation</h2>
          <p className="text-white/80">
            Installing RAM is straightforward but requires care to avoid damaging components.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Power off and unplug your PC. Press the power button for 5 seconds to discharge residual electricity.
            </li>
            <li>
              Ground yourself to prevent static damage: Touch a metal surface or wear an anti-static wrist strap.
            </li>
            <li>
              Open your PC case: Remove the side panel (usually secured with screws or a latch). Refer to your PC’s manual if unsure.
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Safety Warning</strong>: Never work on a powered-on PC. Static electricity can destroy RAM or other components.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 3: Install the RAM</h2>
          <p className="text-white/80">
            RAM slots are long, narrow connectors on your motherboard, usually near the CPU.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Locate the RAM slots. Your motherboard manual will show which slots to use (e.g., “A2 and B2” for dual-channel).
            </li>
            <li>
              Open the slot’s clips by pushing them outward. Align the RAM module’s notch with the slot’s key (it only fits one way).
            </li>
            <li>
              Press the RAM down firmly until the clips snap into place. You’ll hear a click.
            </li>
            <li>
              Close the PC case, plug it in, and boot up. Check if the new RAM is recognized: Right-click “This PC” {'>'} “Properties.”
            </li>
          </ul>
          <img
            src="/images/ram-install.png"
            alt="Installing RAM in motherboard"
            className="rounded-lg shadow-lg my-4 max-w-full h-auto"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">When to Seek Help</h2>
          <p className="text-white/80">
            If your PC doesn’t recognize the new RAM or you’re uncomfortable opening your PC, don’t worry! Contact{' '}
            <a
              href="/contact"
              className="text-cyan-400 hover:underline"
            >
              Xtremery in DeLand, FL
            </a>{' '}
            for professional RAM upgrades. We’ll handle everything safely and quickly.
          </p>
        </section>
      </div>
    ),
  },
};

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-blue-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-white to-cyan-400 text-transparent bg-clip-text">
            {guide.title}
          </h1>
          <div className="flex items-center mb-6">
            <FaTools className="text-3xl text-purple-400" />
            <span className="ml-3 text-xl text-white/80">Step-by-Step Guide</span>
          </div>
          {guide.content}
        </div>
      </main>
      <Footer />
    </>
  );
}