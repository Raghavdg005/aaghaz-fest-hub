import EventPageLayout from "@/components/EventPageLayout";

const VisualVerse = () => {
  return (
    <EventPageLayout
      title="Visual Verse"
      subtitle="Online Poetry Competition"
      icon="✍️"
      dates="Result: 11th February 2026"
      fee="₹100"
      teamSize="Individual"
      themeColor="from-violet-500 to-purple-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "ParthSarthi", phone: "8081872289" },
        { name: "Rashi Sharma", phone: "9971956712" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Mode: Online",
            "Language: Hindi / English",
            "Image Release Date: 1st February 2026",
            "Last Date of Submission: 8th February 2026",
            "Result Declaration: 11th February 2026",
          ],
        },
        {
          title: "Rules",
          items: [
            "Only one entry per participant",
            "Participants must write poetry based on images released on Instagram",
            "Content must be original",
            "Plagiarism will lead to disqualification",
            "Judges' decision will be final and binding",
          ],
        },
      ]}
    />
  );
};

export default VisualVerse;
