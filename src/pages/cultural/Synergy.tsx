import EventPageLayout from "@/components/EventPageLayout";

const Synergy = () => {
  return (
    <EventPageLayout
      title="Synergy"
      subtitle="Group Singing Competition"
      icon="🎶"
      dates="9th February 2026"
      fee="₹100 per participant"
      teamSize="5–7 members"
      venue="Sanjeevani Hall, Academic Block"
      themeColor="from-green-500 to-teal-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "9643688998" },
        { name: "Aamir Hamid", phone: "7004820042" },
        { name: "Priyanshu", phone: "9318316865" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Time: 3:00 PM – 5:00 PM",
            "Theme: Open",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 7–8 minutes",
            "Exceeding time limit leads to negative marking",
            "Karaoke allowed",
            "Playing instruments is not allowed",
            "Group size: 5–7 members",
            "Judges' decision will be final",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Karaoke tracks must be submitted one day prior",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before event",
            "Carry College ID",
          ],
        },
      ]}
    />
  );
};

export default Synergy;
