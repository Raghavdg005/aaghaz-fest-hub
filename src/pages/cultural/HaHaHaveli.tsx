import EventPageLayout from "@/components/EventPageLayout";

const HaHaHaveli = () => {
  return (
    <EventPageLayout
      title="Ha Ha Haveli"
      subtitle="Kavi Sammelan"
      icon="😂"
      dates="10th February"
      fee="₹100"
      teamSize="Individual"
      themeColor="from-yellow-500 to-orange-500"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Parthsarthi", phone: "Academic Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Format",
          items: [
            "Time as per schedule",
            "Language: Hindi",
            "Individual participation",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Original poetry/kavita encouraged",
            "Humorous or satirical content",
            "No offensive content",
          ],
        },
        {
          title: "Judging Criteria",
          items: [
            "Creativity & humor",
            "Delivery & expression",
            "Audience engagement",
          ],
        },
      ]}
    />
  );
};

export default HaHaHaveli;
