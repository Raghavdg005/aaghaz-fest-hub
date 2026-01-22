import EventPageLayout from "@/components/EventPageLayout";

const Breakfree = () => {
  return (
    <EventPageLayout
      title="Breakfree"
      subtitle="Group Dance Competition"
      icon="🔥"
      dates="10th February 2026"
      fee="₹100 per participant"
      teamSize="6–10 members"
      venue="Sanjeevani Hall"
      themeColor="from-orange-500 to-red-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "9643688998" },
        { name: "Aamir Hamid", phone: "7004820042" },
        { name: "Sushant Bharti", phone: "9354075030" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Time: 1:00 PM onwards",
            "Theme: Open",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 8 minutes",
            "Team size: 6–10 members",
            "Props allowed",
            "Negative marking for exceeding time",
            "Judges' decision is final",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before event",
            "Carry College ID & BR Card",
            "Obscene content leads to disqualification",
          ],
        },
      ]}
    />
  );
};

export default Breakfree;
