import EventPageLayout from "@/components/EventPageLayout";

const Soundscapes = () => {
  return (
    <EventPageLayout
      title="Soundscapes"
      subtitle="Solo Instrumental Competition"
      icon="🎼"
      dates="10th February 2026"
      fee="₹100"
      teamSize="Individual"
      venue="Sanjeevani Hall, Academic Block"
      themeColor="from-indigo-500 to-purple-600"
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
            "Time: 10:00 AM onwards",
            "Theme: Open",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 5 minutes",
            "Exceeding the time limit may lead to negative marking",
            "Participants must bring their own instruments",
            "Instrument to be played must be specified beforehand",
            "Judges' decision will be final and binding",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Report 30 minutes before the event",
            "Carry College ID",
          ],
        },
      ]}
    />
  );
};

export default Soundscapes;
