import EventPageLayout from "@/components/EventPageLayout";

const Aura = () => {
  return (
    <EventPageLayout
      title="AURA"
      subtitle="The Fashion Edit – Fashion Show Competition"
      icon="👗"
      dates="11th February 2026"
      fee="₹100 per participant"
      teamSize="7–15 members"
      venue="Central Block, Academic Block"
      themeColor="from-amber-500 to-yellow-400"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Kanisha Mirg", phone: "9643688998" },
        { name: "Aamir Hamid", phone: "7004820042" },
        { name: "Ananya Sidhu", phone: "8368183154" },
      ]}
      ruleSections={[
        {
          title: "Event Details",
          items: [
            "Time: 11:00 AM – 1:00 PM",
            "Theme: Mythologies Around the World",
          ],
        },
        {
          title: "Rules",
          items: [
            "Group participation: 7–15 members per team",
            "Time limit: 10 minutes per team",
            "Exceeding the time limit may result in negative marking",
            "Judges' decision will be final and binding",
          ],
        },
        {
          title: "Code of Conduct",
          items: [
            "Participants must report 30 minutes prior to the event",
            "Carry College ID compulsorily",
          ],
        },
      ]}
    />
  );
};

export default Aura;
