import EventPageLayout from "@/components/EventPageLayout";

const CapturedCreations = () => {
  return (
    <EventPageLayout
      title="Captured Creations"
      subtitle="Online Reel Competition"
      icon="📸"
      dates="1st – 10th February"
      fee="Free Entry"
      teamSize="Individual"
      themeColor="from-pink-600 to-rose-500"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Aamir Hamid", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Format",
          items: [
            "Duration: 30–60 seconds",
            "Platform: Instagram",
            "Submission period: 1st – 10th February",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Original content only",
            "Tag @aaghaz.gims on Instagram",
            "Use designated hashtags",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Creativity & storytelling",
            "Video quality & editing",
            "Engagement & reach",
          ],
        },
      ]}
    />
  );
};

export default CapturedCreations;
