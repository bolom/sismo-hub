// eslint-disable-next-line import/order
import { GroupGeneratorsLibrary } from "topics/group-generator";
import circularmerchLensFollowers from "./circularmerch-lens-followers";
import ensSupporters from "./ens-supporters";
import ensVoters from "./ens-voters";
import eth2Depositors from "./eth2-depositors";
import ethereumMostTransactions from "./ethereum-most-transactions";
import ethereumPowerUsers from "./ethereum-power-users";
import EthereumPowerUsersPolygonZkBadgeHolders from "./ethereum-power-users-polygon-zk-badge-holders";
import flexLoan from "./flex-loan";
import gamejustuAchievements from "./gamejutsu-achievements";
import gitcoinGrantsAggregatedRoundsDonors from "./gitcoin-grants-aggregated-rounds-donors"
import gitcoinGrantsRoundsApiDonors from "./gitcoin-grants-rounds-api-donors"
import gitcoinGrantsRoundsDonors from "./gitcoin-grants-rounds-donors"
import lens50BestFollowed from "./lens-50-best-followed";
import lilnounsProplotContributors from "./lilnouns-proplot-contributors";
import lilnounsProplotVoters from "./lilnouns-proplot-voters";
import localGroup from "./local-group";
import martingbzSismoThread1LensMirrorers from "./martingbz-sismo-thread-1-lens-mirrorers";
import masqueradeLensFollowers from "./masquerade-lens-followers";
import masqueradePolygonZkBadgeHolders from "./masquerade-polygon-zk-badge-holders";
import nftCollector from "./nft-collector";
import pohPolygonZkBadgeHolders from "./poh-polygon-zk-badge-holders";
import proofOfAttendanceMainEvents from "./proof-of-attendance-main-events"
import proofOfHumanity from "./proof-of-humanity";
import proofOfLepakMember from "./proof-of-lepak-member";
import sismoAndMasqueradeLensFollowers from "./sismo-and-masquerade-lens-followers";
import sismoContributors from "./sismo-contributors";
import sismoDiggers from "./sismo-diggers";
import sismoDomain from "./sismo-domains";
import sismoEarlyUsers from "./sismo-early-users";
import sismoEvents from "./sismo-events";
import sismoGenA from "./sismo-gen-a";
import sismoGenX from "./sismo-gen-x";
import sismoGenZero from "./sismo-gen-zero";
import sismoGitcoinDonors from "./sismo-gitcoin-donors";
import sismoLensFollowers from "./sismo-lens-followers";
import sismoMasqueradeLensFollowers from "./sismo-masquerade-lens-followers";
import top100Ens from "./top-100-ens";


export const groupGenerators: GroupGeneratorsLibrary = {
  "circularmerch-lens-followers": circularmerchLensFollowers,
  "ens-voters": ensVoters,
  "ens-supporters": ensSupporters,
  "eth2-depositors": eth2Depositors,
  "ethereum-most-transactions": ethereumMostTransactions,
  "ethereum-power-users": ethereumPowerUsers,
  "ethereum-power-users-polygon-zk-badge-holders": EthereumPowerUsersPolygonZkBadgeHolders,
  "flex-loan": flexLoan,
  "gamejutsu-achievements": gamejustuAchievements,
  "gitcoin-grants-aggregated-rounds-donors": gitcoinGrantsAggregatedRoundsDonors,
  "gitcoin-grants-rounds-api-donors": gitcoinGrantsRoundsApiDonors,
  "gitcoin-grants-rounds-donors": gitcoinGrantsRoundsDonors,
  "lens-50-best-followed": lens50BestFollowed,
  "lilnouns-proplot-contributors": lilnounsProplotContributors,
  "lilnouns-proplot-voters": lilnounsProplotVoters,
  "local-group": localGroup,
  "martingbz-sismo-thread-1-lens-mirrorers": martingbzSismoThread1LensMirrorers,
  "masquerade-lens-followers": masqueradeLensFollowers,
  "masquerade-polygon-zk-badge-holders": masqueradePolygonZkBadgeHolders,
  "nft-collector": nftCollector,
  "poh-polygon-zk-badge-holders": pohPolygonZkBadgeHolders,
  "proof-of-attendance-main-events": proofOfAttendanceMainEvents,
  "proof-of-humanity": proofOfHumanity,
  "proof-of-lepak-member": proofOfLepakMember,
  "sismo-and-masquerade-lens-followers": sismoAndMasqueradeLensFollowers,
  "sismo-contributors": sismoContributors,
  "sismo-diggers": sismoDiggers,
  "sismo-domains": sismoDomain,
  "sismo-early-users": sismoEarlyUsers,
  "sismo-events": sismoEvents,
  "sismo-gen-a": sismoGenA,
  "sismo-gen-x": sismoGenX,
  "sismo-gen-zero": sismoGenZero,
  "sismo-gitcoin-donors": sismoGitcoinDonors,
  "sismo-lens-followers": sismoLensFollowers,
  "sismo-masquerade-lens-followers": sismoMasqueradeLensFollowers,
  "top-100-ens": top100Ens,
};
