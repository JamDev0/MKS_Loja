import { CircleNotch } from "phosphor-react";

import { LoadingImagePlaceholderContainer } from "./LoadingImagePlaceholder.styles";

export function LoadingImagePlaceholder() {
    return(
        <LoadingImagePlaceholderContainer>
            <CircleNotch className="Icon"/>
        </LoadingImagePlaceholderContainer>
    )
}