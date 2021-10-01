import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: SiteData = {
  customCssKey: "styles.css",
  meta: {
    // values: TOPIC_TITLE
    title: "TOPIC_TITLE • Fabletics",
    description: "Send a video question (no app needed) for TOPIC_TITLE",
  },
  introScreen: {
    // values: SOCIAL_NETWORK, BROWSER_NAME, INVITATION_DISPLAY_NAME, EXTRA_TERMS, BRAND_SLUG, TERMS_SLUG, TERMS_NAME, BRAND_NAME
    recordButtonLabel: "Record a video question",
    readyDescription: `
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Hang on</h1>
      <p class="text-left text-gray-700 text-sm py-3">The SOCIAL_NETWORK browser doesn’t support direct camera uploads on Android.</p>
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Good news</h1>
      <p class="text-left text-gray-700 text-sm py-3">Just tap the three dots menu and choose <span class="whitespace-nowrap">“Open in BROWSER_NAME”</span> to send your video question to <span class="whitespace-nowrap">INVITATION_DISPLAY_NAME</span>.</p>
    `,
  },
  introScreenDesktop: {
    // values: THEME_FILE_ROOT, TOPIC_TITLE, QR_CODE, INVITATION_DISPLAY_NAME, INVITATION_URL
    markup: `
      <div class="flex flex-col items-center justify-between text-center flex-grow ">
        <div class="flex flex-col items-center justify-between text-center">
          <div class="m-2">
            <a href="https://fabletics.com">
              <img src="THEME_FILE_ROOT/icon-black-small.png" class="h-12" />
            </a>
          </div>
          <h1 class="font-heading mt-3 mb-6 text-xl md:text-2xl max-h-28 md:max-h-32 overflow-hidden">TOPIC_TITLE</h1>
        </div>
        <div class="m-8">QR_CODE</div>
        <div>
          <p class="m-4 mb-6 text-base">Point your camera at the QR code to open this link on your
          phone and send <b>INVITATION_DISPLAY_NAME</b> <span class="whitespace-nowrap">your video question.</span></p>
        </div>
      </div>
    `,
  },
  nameScreen: {
    // values: UPLOAD_PERCENTAGE, INVITATION_DISPLAY_NAME, SOCIAL_NETWORK
    nameScreenHeader: `
      <div class="my-2 flex flex-col items-center">
        <img src="THEME_FILE_ROOT/icon-black-small.png" class="h-16" />
      </div>
    `,
  },
  successScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME
    markup: `
      <div class="flex flex-grow flex-col items-center justify-between">
        <div>
          <div class="m-2">
            <a href="https://fabletics.com">
              <img src="THEME_FILE_ROOT/logo-small.png" style="width: 250px; margin: 0 auto;" />
            </a>
          </div>
          <p class="mt-12 mb-12 mx-3 text-center">Nice work! Your video question for <b>INVITATION_DISPLAY_NAME</b> <span class="whitespace-nowrap">was sent.</span></p>
          <p class="mt-12 mb-12 mx-3 text-center">Follow us on Instagram to see <b>INVITATION_DISPLAY_NAME</b>'s answers. <a href="https://www.instagram.com/fableticsmen/">@FableticsMen</p>
        </div>
      </div>
    `,
  },
};
