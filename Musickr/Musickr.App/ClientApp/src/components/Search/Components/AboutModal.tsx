import React from "react";

import {
  Link,
  Modal, ModalBody, ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps, Text, VStack
} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";

import {useTranslation} from "react-i18next";

const AboutModal = (props: Omit<ModalProps, "children">) => {
  const { t } = useTranslation();
  
  return (
    <Modal
      isCentered={true}
      {...props}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {t("searchPage.about.modalTitle")}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack my="4">
            <Text>
              {t("searchPage.about.createdBy")}
            </Text>
            <Link 
              href="https://github.com/ManedFox/Musickr"
              isExternal
            >
              {t("searchPage.about.githubLink")} 
              <ExternalLinkIcon mx="2" />
            </Link>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default React.memo(AboutModal);