import { useState, useEffect } from "react";

const LastFmData = ({userName, apiKey}) => {
  const [lFmData, setLFmData] = useState({});
  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${userName}&api_key=${apiKey}&format=json`
    )
      .then((response) => {
        if (response.ok) {
            console.log('in response')
          return response.json();
        }
        throw new Error("error");
      })
      .then((data) => setLFmData(data))
      .catch(() => {
        setLFmData({ error: "Something has gone wrong on Last.fm's end!" });
      });
  }, []);

  const buildData = () => {
    const { error } = lFmData;
    const name = lFmData?.topartists?.artist[0]?.name;
    console.log(lFmData?.topartists?.artist[0]?.name)

    if (error) {
      return <p>{error}</p>;
    }

    if (!name) {
      return <p>Loading</p>;
    }

    return <h3>Your top artist is: {name}</h3>;
  };
  return buildData();
};

export default LastFmData;
