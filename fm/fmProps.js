import FMGofer, {Option} from "fm-gofer";

const param = {};
const scriptName = "load_google_maps_data";

export const getFmProps = async () => {
  let props = "##PROPSPLACEHOLDER##";
  let metaDevUrl = "";
  try {
    metaDevUrl = document
      .querySelector("meta[dev-url]")
      .getAttribute("dev-url");
  } catch (e) {
    console.log("No dev-url meta tag found");
  }

  if (
    (import.meta.env.VITE && import.meta.env.DEV) ||
    window.location.href.includes(metaDevUrl)
  ) {
    // We are in development mode
    // const urlParams = new URLSearchParams(window.location.search);
    const fmData = await FMGofer.PerformScriptWithOption(
      scriptName,
      param,
      Option.SuspendAndResume,
    );
    props = JSON.parse(fmData || "{}");
  } else if (import.meta.env.PROD) {
    const fmData = await FMGofer.PerformScriptWithOption(
      scriptName,
      param,
      Option.SuspendAndResume,
    );
    props = JSON.parse(fmData || "{}");
  } else {
    // We are in production mode try getting the merged props

    if (props === "##PROPSPLACEHOLDER##") {
      // Use double quotes here so we can use single quotes for the merge
      props = null;
      let message = "No data found.";
      console.log("Props: ", props);
      alert(message);
      // Then we have not provided any props
    } else {
      if (typeof props !== "object") {
        let message = "During development, please provide props as an object.";
        console.log("Message:", message);
        console.log("Props:", props);
        alert(message);
      }
    }
  }

  window.__PROPS__ = props;
  return props;
};
