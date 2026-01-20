import EventPageLayout from "@/components/EventPageLayout";

const Galleria = () => {
  return (
    <EventPageLayout
      title="Galleria"
      subtitle="Art Exhibition"
      icon="🖼️"
      dates="11th February"
      fee="Free Entry"
      teamSize="Individual"
      themeColor="from-amber-500 to-orange-600"
      backLink="/cultural"
      backLabel="Back to Cultural"
      registrationLink="https://forms.gle/UT3uCjRHc37dje9z7"
      contacts={[
        { name: "Aamir Hamid", phone: "Cultural Coordinator" },
      ]}
      ruleSections={[
        {
          title: "Format",
          items: [
            "Display time: 3 hours",
            "Open exhibition format",
            "All art mediums welcome",
          ],
        },
        {
          title: "Requirements",
          items: [
            "Pre-registration mandatory",
            "Artwork submission before event",
            "Artist must be present during display",
          ],
        },
        {
          title: "Categories",
          items: [
            "Paintings & drawings",
            "Digital art",
            "Sculptures & 3D art",
            "Photography",
          ],
        },
      ]}
    />
  );
};

export default Galleria;
