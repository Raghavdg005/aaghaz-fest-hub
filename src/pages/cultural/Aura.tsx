import EventPageLayout from "@/components/EventPageLayout";

const Aura = () => {
  return (
    <EventPageLayout
      title="AURA"
      subtitle="Fashion Show"
      icon="👗"
      dates="11th February"
      fee="₹1000 per team"
      teamSize="7–10 members"
      themeColor="from-amber-500 to-yellow-400"
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
            "Minimum: 7 members",
            "Maximum: 10 members",
          ],
        },
        {
          title: "Performance",
          items: [
            "Theme: Mythologies Around the World",
            "Time limit: 12–15 minutes",
            "Original choreography required",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Props and special effects allowed",
            "Costumes must align with theme",
            "Music track submission required",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Theme interpretation",
            "Costume design & creativity",
            "Choreography & walk",
            "Overall presentation & impact",
          ],
        },
      ]}
    />
  );
};

export default Aura;
