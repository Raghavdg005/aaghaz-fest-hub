import EventPageLayout from "@/components/EventPageLayout";

const Soundscapes = () => {
  return (
    <EventPageLayout
      title="Soundscapes"
      subtitle="Instrumental Solo Competition"
      icon="🎼"
      dates="10th February"
      fee="₹100"
      teamSize="Individual"
      themeColor="from-indigo-500 to-purple-600"
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
            "Time limit: 5 minutes",
            "Any instrument allowed",
            "Solo performance only",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Own instruments required",
            "Western/Indian classical allowed",
            "Fusion compositions welcome",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Technical proficiency",
            "Musicality & expression",
            "Composition choice",
          ],
        },
      ]}
    />
  );
};

export default Soundscapes;
