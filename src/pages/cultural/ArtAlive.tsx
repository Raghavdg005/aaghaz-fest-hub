import EventPageLayout from "@/components/EventPageLayout";

const ArtAlive = () => {
  return (
    <EventPageLayout
      title="Art Alive"
      subtitle="Face Painting Competition"
      icon="🎭"
      dates="10th February"
      fee="Free Entry"
      teamSize="Individual/Pair"
      themeColor="from-purple-500 to-indigo-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Aamir Hamid", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Time & Format",
          items: [
            "Time limit: 1 hour",
            "Individual or pair participation",
            "Theme will be announced on spot",
          ],
        },
        {
          title: "Materials",
          items: [
            "Own material required",
            "Non-toxic face paints only",
            "Brushes and tools to be brought",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Creativity & design",
            "Color blending",
            "Theme interpretation",
            "Overall presentation",
          ],
        },
      ]}
    />
  );
};

export default ArtAlive;
