import React from "react";

function Resume() {
  return (
    <div className=" text-gray-200 p-8 mx-32">
      <div className="text-4xl font-bold mb-6 text-center"> My Resume</div>
      <div className="text-lg font-semi mb-6 text-center">
        Building Digital Experiences with a Passion for{" "}
        <strong className="text-red-500">Innovation and Precision </strong>
      </div>
      {/* Summary */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-red-500 mb-2 italic">
          Summary
        </h3>
        <p className="text-center">
          <strong className="text-red-500">Dynamic and passionate </strong> iOS
          Developer with experience in mobile app development,{" "}
          <strong className="text-red-500">
            dedicated to creating impactful
          </strong>{" "}
          and user-friendly applications. Experienced in both front-end and
          back-end development, specializing in iOS and AWS projects.
        </p>
      </div>

      {/* Professional Experience */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-red-500 mb-4 italic">
          Professional Experience
        </h3>

        {/* EdFarm - iOS Developer */}
        <div className="mb-6">
          <div className="text-xl font-semibold">
            EdFarm - iOS Developer/SoftwarEngineer
          </div>
          <p className="text-gray-400">December 2021 - Present</p>
          <ul className="list-disc list-inside ml-6 mt-2 text-left">
            <li>
              Developed and maintained iOS applications for iPhone and iPad
              using Swift and SwiftUI, delivering intuitive and functional
              designs.
            </li>
            <li>
              Collaborated with cross-functional teams to integrate iOS
              applications with RESTful APIs for efficient data management.
            </li>
            <li>
              Enhanced performance and optimized features, following Apple's
              Human Interface Guidelines.
            </li>
          </ul>
        </div>

        {/* AWS and Software Development Projects */}
        <div className="mb-6">
          <div className="text-xl font-semibold text-red-500 italic">
            AWS & Software Development Projects
          </div>

          {/* EdFarm Learn */}
          <div className="mt-4">
            <h5 className="text-lg font-semibold">EdFarm Learn</h5>
            <p>
              Developed an interactive learning platform that utilizes AWS
              services to host educational resources. Played a key role in
              front-end and back-end integration to ensure seamless performance.
            </p>
          </div>

          {/* The Movement App */}
          <div className="mt-4">
            <h5 className="text-lg font-semibold">The Movement</h5>
            <p>
              Created an app to inspire modern-day movements by showcasing
              Birmingham’s history through interactive visual stories and
              self-guided tours. Built using SwiftUI and GraphQL, enabling a
              dynamic experience with localized data.
            </p>
          </div>

          {/* Future of Learning Event Website */}
          <div className="mt-4">
            <h5 className="text-lg font-semibold">
              Future of Learning Event Website
            </h5>
            <p>
              Designed and implemented a website to support the Future of
              Learning event, utilizing AWS to manage traffic and backend
              processes, and enhancing the attendee experience through a
              responsive and engaging interface using Astro.js.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-10">
        <div className="text-2xl font-semibold text-red-500 mb-2 italic">
          Skills
        </div>
        <ul className="list-disc list-inside ml-6">
          <li>Swift, SwiftUI, Xcode</li>
          <li>RESTful API Integration</li>
          <li>AWS (Hosting, Storage, Database Management)</li>
          <li>GraphQL, Core Data, MVVM Architecture</li>
          <li>Apple’s Human Interface Guidelines</li>
          <li>Version Control (Git)</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
