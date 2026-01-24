import EventPageLayout from "@/components/EventPageLayout";

const MicDrop = () => {
  return (
    <EventPageLayout
      title="Mic Drop"
      subtitle="Solo Singing Competition"
      icon="🎤"
      dates="10th February 2026"
      fee="₹100"
      teamSize="Individual"
      venue="Sanjeevani Hall, Academic Block"
      themeColor="from-red-500 to-pink-600"
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
            "Time: 11:30 AM onwards",
            "Theme: Indian",
          ],
        },
        {
          title: "Rules",
          items: [
            "Time limit: 4–5 minutes",
            "Exceeding time limit leads to negative marking",
            "Karaoke allowed",
            "Instruments allowed (no extra marks)",
            "Judges' decision will be final",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Karaoke tracks must be submitted one day before",
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

export default MicDrop;
