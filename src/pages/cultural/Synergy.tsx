import EventPageLayout from "@/components/EventPageLayout";

const Synergy = () => {
  return (
    <EventPageLayout
      title="Synergy"
      subtitle="Group Singing Competition"
      icon="🎶"
      dates="9th February"
      fee="₹100 per participant"
      teamSize="5–7 members"
      themeColor="from-green-500 to-teal-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Team Composition",
          items: [
            "Minimum: 5 members",
            "Maximum: 7 members",
          ],
        },
        {
          title: "Performance",
          items: [
            "Time as per schedule",
            "Any genre/language allowed",
            "Live instruments encouraged",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Harmony & coordination",
            "Vocal quality",
            "Overall presentation",
          ],
        },
      ]}
    />
  );
};

export default Synergy;
