import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
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
  'removing-malware': {
    title: 'Removing Malware from Your PC',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Overview</h2>
          <p className="text-white/80">
            Malware, like viruses or spyware, can slow your PC, steal data, or cause pop-ups. This guide shows you how to detect and remove malware safely using free tools, no advanced skills needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 1: Disconnect from the Internet</h2>
          <p className="text-white/80">
            Malware often communicates with remote servers. Disconnecting prevents further damage or data theft.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>Unplug your Ethernet cable or turn off Wi-Fi (click the network icon in the taskbar and toggle Wi-Fi off).</li>
            <li>Confirm you’re offline by trying to load a website (it should fail).</li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Note</strong>: Stay offline until you’re confident the malware is removed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 2: Run a Malware Scan</h2>
          <p className="text-white/80">
            Use trusted antivirus software to scan and remove malware. Windows Defender (built-in) or Malwarebytes (free) are great options.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Open Windows Defender: Search for “Windows Security” in the Start menu, select “Virus & threat protection,” and click “Scan options.”
            </li>
            <li>
              Choose “Full scan” and click “Scan now.” This may take an hour or more.
            </li>
            <li>
              Alternatively, download Malwarebytes:{' '}
              <a
                href="https://www.malwarebytes.com/mwb-download"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                malwarebytes.com
              </a>. Install it, update the database, and run a “Threat Scan.”
            </li>
            <li>Quarantine or delete any threats found. Follow the software’s prompts.</li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Tip</strong>: Avoid “free antivirus” tools from unknown sources—they might be malware in disguise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 3: Remove Suspicious Programs</h2>
          <p className="text-white/80">
            Malware sometimes disguises itself as legitimate software. Check for unfamiliar programs and uninstall them.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Open Control Panel: Search for “Control Panel” in the Start menu, then select “Uninstall a program.”
            </li>
            <li>
              Look for unfamiliar or recently installed programs (sort by “Installed On” date). If unsure, search the program’s name online to verify.
            </li>
            <li>Select suspicious programs and click “Uninstall.” Follow the prompts.</li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Warning</strong>: Don’t uninstall programs you’re unsure about, like system utilities or drivers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">When to Seek Help</h2>
          <p className="text-white/80">
            If malware persists, pop-ups continue, or you suspect a serious infection, professional help is the safest option. Contact{' '}
            <a
              href="/contact"
              className="text-cyan-400 hover:underline"
            >
              Xtremery in DeLand, FL
            </a>{' '}
            for expert malware removal and system cleanup. We’ll ensure your PC is secure.
          </p>
        </section>
      </div>
    ),
  },
  'setting-up-wifi': {
    title: 'Setting Up a Secure Wi-Fi Network',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Overview</h2>
          <p className="text-white/80">
            A secure Wi-Fi network keeps your data safe and prevents unauthorized access. This guide walks you through setting up your router with strong security settings, even if you’re not tech-savvy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 1: Access Your Router Settings</h2>
          <p className="text-white/80">
            Most routers have a web interface for configuration. You’ll need to log in to make changes.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Connect to your router via Wi-Fi or Ethernet cable.
            </li>
            <li>
              Open a browser and enter your router’s IP address (usually 192.168.0.1 or 192.168.1.1). Check the router’s label or manual if unsure.
            </li>
            <li>
              Log in using the default credentials (often “admin” for both username and password, or check the router’s label). If changed, use your custom credentials.
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Note</strong>: If you can’t access the router, reset it by holding the reset button for 10 seconds (this restores factory settings).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 2: Secure Your Wi-Fi</h2>
          <p className="text-white/80">
            Update your Wi-Fi name (SSID) and password to prevent unauthorized access.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              In the router settings, find “Wireless” or “Wi-Fi Settings.”
            </li>
            <li>
              Change the SSID to something unique (e.g., “HomeWiFi2025”). Avoid personal info like your name or address.
            </li>
            <li>
              Set the security to WPA3 (or WPA2 if WPA3 isn’t available). Avoid WEP—it’s outdated and insecure.
            </li>
            <li>
              Create a strong password (at least 12 characters, mixing letters, numbers, and symbols). Save it in a secure place.
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Tip</strong>: After saving, reconnect all devices using the new Wi-Fi name and password.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 3: Update Router Firmware</h2>
          <p className="text-white/80">
            Outdated firmware can have security vulnerabilities. Updating it keeps your network safe.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              In the router settings, look for “Firmware Update,” “System,” or “Administration.”
            </li>
            <li>
              Check for updates. If available, follow the prompts to download and install.
            </li>
            <li>
              Don’t unplug the router during the update—it could brick the device.
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Warning</strong>: Check your router’s manufacturer website (e.g., TP-Link, Netgear) for specific update instructions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">When to Seek Help</h2>
          <p className="text-white/80">
            If you’re unable to access your router, suspect a security breach, or need help optimizing your network, we’ve got you covered. Contact{' '}
            <a
              href="/contact"
              className="text-cyan-400 hover:underline"
            >
              Xtremery in DeLand, FL
            </a>{' '}
            for professional Wi-Fi setup and security. We’ll ensure your network is fast and secure.
          </p>
        </section>
      </div>
    ),
  },
  'backing-up-data': {
    title: 'Backing Up Your Data Safely',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Overview</h2>
          <p className="text-white/80">
            Data loss from hardware failure, malware, or accidents can be devastating. Regular backups protect your photos, documents, and more. This guide shows you how to back up your data using free tools and simple steps.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 1: Choose a Backup Method</h2>
          <p className="text-white/80">
            You can back up to an external hard drive, cloud storage, or both for extra security.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              <strong>External Hard Drive</strong>: Affordable and fast. Buy a reliable drive (e.g., Western Digital, Seagate) with enough capacity (at least 1TB).
            </li>
            <li>
              <strong>Cloud Storage</strong>: Services like Google Drive or OneDrive offer remote backups. Free plans (e.g., 15GB for Google Drive) are good for small files.
            </li>
            <li>
              Combine both for redundancy. Store critical files in the cloud and everything else on a drive.
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Note</strong>: External drives are physical and can fail, so keep them in a safe place.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 2: Back Up with Windows</h2>
          <p className="text-white/80">
            Windows has a built-in tool called File History for easy backups to an external drive.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Connect your external drive to your PC.
            </li>
            <li>
              Open Settings: Search for “File History” in the Start menu and select “Backup settings.”
            </li>
            <li>
              Click “Add a drive” and select your external drive. Turn on “Automatically back up my files.”
            </li>
            <li>
              Click “More options” to choose folders (e.g., Documents, Pictures) and set backup frequency (e.g., every hour).
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Tip</strong>: Check your backup occasionally to ensure it’s working. Open the drive to verify files.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Step 3: Set Up Cloud Backup</h2>
          <p className="text-white/80">
            Cloud backups are great for accessing files anywhere and protecting against physical drive failure.
          </p>
          <ul className="list-decimal pl-6 text-white/80 mt-2 space-y-2">
            <li>
              Sign up for a cloud service like Google Drive ({' '}
              <a
                href="https://www.google.com/drive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                google.com/drive
              </a>{' '}
              ) or Microsoft OneDrive ({' '}
              <a
                href="https://www.microsoft.com/en-us/microsoft-365/onedrive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                onedrive.com
              </a>{' '}
              ).
            </li>
            <li>
              Download and install the service’s desktop app. Sign in with your account.
            </li>
            <li>
              Choose folders to sync (e.g., Desktop, Documents). Files will upload automatically when online.
            </li>
          </ul>
          <p className="text-white/80 mt-2">
            <strong>Warning</strong>: Free cloud plans have limited storage. Upgrade to a paid plan for large backups.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">When to Seek Help</h2>
          <p className="text-white/80">
            If you’re overwhelmed by backup options, lost data, or need help recovering files, we’re here to help. Contact{' '}
            <a
              href="/contact"
              className="text-cyan-400 hover:underline"
            >
              Xtremery in DeLand, FL
            </a>{' '}
            for professional backup setup or data recovery. We’ll keep your data safe.
          </p>
        </section>
      </div>
    ),
  },
};

// Generate metadata for SEO
export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }

  return {
    title: {
      absolute: `${guide.title} Guide - Xtremery`,
    },
    description: `Free step-by-step guide: ${guide.title}. Expert computer repair advice from Xtremery in DeLand, FL.`,
    alternates: {
      canonical: `https://www.xtremery.com/guides/${slug}`,
    },
    openGraph: {
      title: `${guide.title} | Xtremery PC Repair Guides`,
      description: `Learn how to handle ${guide.title.toLowerCase()} with this free guide from DeLand's trusted PC repair experts.`,
      url: `https://www.xtremery.com/guides/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  return (
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
  );
}