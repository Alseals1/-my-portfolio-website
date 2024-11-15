import React from "react";

function Experience() {
  return (
    <div className="text-gray-200 p-4 sm:p-8 mb-8">
      <div className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
        Experience
      </div>
      <div className="text-base sm:text-xl mb-4 sm:mb-6 mx-4 sm:mx-32 text-gray-500 text-center sm:text-left">
        Imagine a place where technology and artistry collide—a stage where each
        project is a masterpiece and every skill is a stepping stone toward
        greatness. My mission? To{" "}
        <strong className="text-red-500">broadcast my journey</strong>, from the
        intricate realms of AWS to the dynamic world of iOS development and
        JavaScript. This is your front-row seat to witness the magic unfold.
      </div>
      <div className="mx-4 sm:mx-60">
        {/* Summary */}
        <div className="mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-red-500 mb-2 italic text-center sm:text-left">
            Summary
          </h3>
          <p className="text-center sm:text-left">
            <strong className="text-red-500">Dynamic and passionate</strong> iOS
            Developer with experience in mobile app development,{" "}
            <strong className="text-red-500">
              dedicated to creating impactful
            </strong>{" "}
            and user-friendly applications. Experienced in both front-end and
            back-end development, specializing in iOS and AWS projects.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-red-500 mb-4 italic text-center sm:text-left">
            Professional Experience
          </h3>

          {/* EdFarm - iOS Developer */}
          <div className="mb-4 sm:mb-6">
            <div className="text-lg sm:text-xl font-semibold">
              EdFarm - iOS Developer/Software Engineer
            </div>
            <p className="text-gray-400">December 2021 - Present</p>
            <ul className="list-disc list-inside ml-4 sm:ml-6 mt-2 text-left text-sm sm:text-base">
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
          <div className="mb-4 sm:mb-6">
            <div className="text-lg sm:text-xl font-semibold text-red-500 italic">
              AWS & Software Development Projects
            </div>

            {/* EdFarm Learn */}
            <div className="mt-4">
              <h5 className="text-base sm:text-lg font-semibold">
                EdFarm Learn
              </h5>
              <p className="text-sm sm:text-base">
                Developed an interactive learning platform that utilizes AWS
                services to host educational resources. Played a key role in
                front-end and back-end integration to ensure seamless
                performance.
              </p>
            </div>

            {/* The Movement App */}
            <div className="mt-4">
              <h5 className="text-base sm:text-lg font-semibold">
                The Movement
              </h5>
              <p className="text-sm sm:text-base">
                Created an app to inspire modern-day movements by showcasing
                Birmingham’s history through interactive visual stories and
                self-guided tours. Built using SwiftUI and GraphQL, enabling a
                dynamic experience with localized data.
              </p>
            </div>

            {/* Future of Learning Event Website */}
            <div className="mt-4">
              <h5 className="text-base sm:text-lg font-semibold">
                Future of Learning Event Website
              </h5>
              <p className="text-sm sm:text-base">
                Designed and implemented a website to support the Future of
                Learning event, utilizing AWS to manage traffic and backend
                processes, and enhancing the attendee experience through a
                responsive and engaging interface using Astro.js.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6 sm:mb-10">
          <div className="text-xl sm:text-2xl font-semibold text-red-500 mb-2 italic text-center sm:text-left">
            Skills
          </div>
          <ul className="list-disc list-inside ml-4 sm:ml-6 text-sm sm:text-base">
            <li>Swift, SwiftUI, Xcode</li>
            <li>RESTful API Integration</li>
            <li>AWS (Hosting, Storage, Database Management)</li>
            <li>GraphQL, SQL, Core Data, MVVM Architecture</li>
            <li>Apple’s Human Interface Guidelines</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
