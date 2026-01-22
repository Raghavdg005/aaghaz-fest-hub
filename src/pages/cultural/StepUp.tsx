import EventPageLayout from "@/components/EventPageLayout";

const StepUp = () => {
  return (
    <EventPageLayout
      title="Step Up"
      subtitle="Solo Dance Competition (Western/Freestyle)"
      icon="💃"
      dates="9th February 2026"
      fee="₹100"
      venue="Sanjeevani Hall, Academic Block"
      themeColor="from-pink-500 to-purple-600"
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
            "Time: 9:00 AM onwards",
            "Theme: Western / Freestyle",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 4 minutes",
            "Exceeding time limit may lead to negative marking",
            "Props are allowed (participants responsible for their belongings)",
            "Judges' decision will be final and binding",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Soundtracks must be submitted one day prior to the event",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before the event",
            "Carry College ID & BR Card",
          ],
        },
      ]}
    />
  );
};

export default StepUp;
