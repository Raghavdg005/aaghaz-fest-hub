import EventPageLayout from "@/components/EventPageLayout";

const MicDrop = () => {
  return (
    <EventPageLayout
      title="Mic Drop"
      subtitle="Solo Singing Competition"
      icon="🎤"
      dates="10th February"
      fee="₹100"
      teamSize="Individual"
      themeColor="from-red-500 to-pink-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Performance",
          items: [
            "Time limit: 4–5 minutes",
            "Any language allowed",
            "Solo performance only",
          ],
        },
        {
          title: "Accompaniment",
          items: [
            "Instrumental track permitted",
            "Live instruments encouraged",
            "Karaoke allowed",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Vocal quality & pitch",
            "Stage presence",
            "Song selection & delivery",
          ],
        },
      ]}
    />
  );
};

export default MicDrop;
