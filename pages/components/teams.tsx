import { styled } from "../../stitches.config";

import { ResponsiveContainer } from "../components/responsive-container";

import Image from "next/image";

const TeamsSection = styled({
  ".teams": {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: "56px",
    span: {
      marginBottom: "24px",
      display: "block",
      fontSize: "$7",
      color: "$grey200",
      textAlign: "center",
    },
    ".team_association ul": {
      display: "flex",
      gap: "30px",
      "@md": {
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    "ul li img": {
      objectFit: "contain",
    },
    "ul li": {
      listStyle: "none",
      "&:nth-child(1) img": {
        width: "96px",
        height: "30px",
      },
      "&:nth-child(2) img": {
        width: "187.5px",
        height: "30px",
      },
      "&:nth-child(3) img": {
        width: "147.5px",
        height: "30px",
      },
      "&:nth-child(4) img": {
        width: "100.75px",
        height: "30px",
      },
    },
  },
});

export default function TeamsBox() {
  return (
    <ResponsiveContainer>
      <TeamsSection>
        <div className="teams">
          <section>
            <span>TRUSTED BY THOUSANDS OF TEAMS, INCLUDING</span>
            <div className="team_association">
              <ul>
                <li>
                  <Image
                    src="https://tailscale.com/files/images/customers/bolt.svg"
                    alt="team-associate"
                    width={0}
                    height={0}
                  />
                </li>
                <li>
                  <Image
                    src="https://tailscale.com/files/images/customers/instacart.svg"
                    alt="team-associate2"
                    width={0}
                    height={0}
                  />
                </li>
                <li>
                  <Image
                    src="https://tailscale.com/files/images/customers/mercari.svg"
                    alt="team-associate3"
                    width={0}
                    height={0}
                  />
                </li>
                <li>
                  <Image
                    src="https://tailscale.com/files/images/customers/oxide.svg"
                    alt="team-associate4"
                    width={0}
                    height={0}
                  />
                </li>
                <li>
                  <Image
                    src="https://tailscale.com/files/images/customers/versabank.svg"
                    alt="team-associate5"
                    width={0}
                    height={0}
                  />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </TeamsSection>
    </ResponsiveContainer>
  );
}
