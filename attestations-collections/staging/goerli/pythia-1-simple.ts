import { Network } from "topics/attester";
import { BadgesCollection } from "topics/badge";

export const pythia1SimpleBadges: BadgesCollection = {
  collectionIdFirsts: {
    [Network.Goerli]: 30000001,
  },
  badges: [
    {
      internalCollectionId: 0,
      name: "Synaps Liveness ZK Badge",
      description:
        "ZK Badge owned by users that proved their liveness with Synaps",
      image: "synaps_liveness.svg",
      publicContacts: [
        {
          type: "twitter",
          contact: "@sismo_eth",
        },
      ],
      eligibility: {
        shortDescription: "Prove your Liveness with Synaps",
        specification: "",
      },
      links: [
        {
          logoUrl: "",
          label: "Synaps",
          url: "https://synaps.io/",
        },
      ],
    },
  ],
};
