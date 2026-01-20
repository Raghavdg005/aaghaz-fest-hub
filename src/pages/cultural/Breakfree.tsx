import EventPageLayout from "@/components/EventPageLayout";

const Breakfree = () => {
  return (
    <EventPageLayout
      title="Breakfree"
      subtitle="Group Dance Competition"
      icon="🔥"
      dates="10th February"
      fee="₹100 per participant"
      teamSize="6–10 members"
      themeColor="from-orange-500 to-red-600"
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
            "Minimum: 6 members",
            "Maximum: 10 members",
          ],
        },
        {
          title: "Performance",
          items: [
            "Time limit: 8 minutes",
            "Any dance form or fusion allowed",
            "Theme-based performances encouraged",
          ],
        },
        {
          title: "Props & Stage",
          items: [
            "Stage props allowed",
            "Fire/water effects not permitted",
            "Music track submission required",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Choreography & formations",
            "Synchronization & teamwork",
            "Energy & stage presence",
          ],
        },
      ]}
    />
  );
};

export default Breakfree;
