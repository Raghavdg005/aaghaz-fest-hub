import EventPageLayout from "@/components/EventPageLayout";

const Rangotsav = () => {
  return (
    <EventPageLayout
      title="Rangotsav"
      subtitle="Rangoli Competition"
      icon="🎨"
      dates="9th February"
      fee="Free Entry"
      teamSize="Maximum 4 members"
      themeColor="from-pink-500 to-rose-600"
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
            "Time limit: 90 minutes",
            "Team of maximum 4 members",
            "Theme will be announced prior",
          ],
        },
        {
          title: "Materials",
          items: [
            "Basic materials provided",
            "Additional materials can be brought",
            "Natural colors preferred",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Creativity & originality",
            "Color combination",
            "Theme interpretation",
            "Neatness & finish",
          ],
        },
      ]}
    />
  );
};

export default Rangotsav;
