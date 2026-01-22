import EventPageLayout from "@/components/EventPageLayout";

const CapturedCreations = () => {
  return (
    <EventPageLayout
      title="Captured Creations"
      subtitle="Online Art Reel Competition"
      icon="📸"
      dates="1st – 10th February 2026"
      fee="₹100"
      teamSize="Individual"
      themeColor="from-pink-600 to-rose-500"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "9643688998" },
        { name: "Aamir Hamid", phone: "7004820042" },
        { name: "Aarshi Agrawal", phone: "8630428820" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Duration: 1st – 10th February 2026",
            "Result Declaration: 11th February 2026",
            "Mode: Online (Instagram)",
          ],
        },
        {
          title: "Rules",
          items: [
            "Open to all medical students",
            "Reel duration: 30–60 seconds",
            "Reel must be original",
            "Must be posted on a public Instagram account",
            "Follow @gims_meraki",
            "Use hashtags: #MerakiGIMS #CollegeCreatives",
            "Tag @gims_meraki",
            "Only one entry allowed",
            "No watermarks allowed",
            "Late entries will not be accepted",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Creativity & originality",
            "Relevance",
            "Storytelling",
            "Editing & presentation",
            "Overall impact",
          ],
        },
      ]}
    />
  );
};

export default CapturedCreations;
