import { createUseTranslatedToast } from "sonner-next-intl";
import messages from "../messages/en.json";

const useTranslatedToast = createUseTranslatedToast<typeof messages>();

export { useTranslatedToast };
