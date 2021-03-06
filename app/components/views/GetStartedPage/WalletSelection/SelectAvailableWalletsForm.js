import { FormattedMessage as T } from "react-intl";
import { WalletSelect } from "inputs";
import { KeyBlueButton, RemoveWalletButton } from "buttons";
import "style/LoginForm.less";

const SelectAvailableWalletsForm = ({
  availableWallets,
  selectedWallet,
  startWallet,
  onRemoveWallet,
  onChangeAvailableWallets,
}) => {

  return (
    <Aux>
      <div className="advanced-daemon-row">
        <div className="advanced-daemon-label">
          <T id="wallet.form.available.label" m="Available Wallets" />:
        </div>
        <div className="advanced-daemon-input">
          <WalletSelect className="stakepool-unconfigured-select"
            options={availableWallets}
            value={selectedWallet}
            onChange={onChangeAvailableWallets} />
        </div>
      </div>
      <div className="advanced-daemon-row advanced-daemon-row--with-flex advanced-daemon-row--with-padding-top">
        <RemoveWalletButton
        modalTitle={<T id="stakepools.list.removeConfirmTitle" m="Remove Wallet" />}
        buttonLabel={<T id="stakepools.list.btnRemove" m="Remove"/>}
        modalContent={
          <T id="stakepools.list.confirmRemove" m="Do you confirm removal of wallet {wallet}?"
            values={{wallet: (<span className="mono">{selectedWallet && selectedWallet.label}</span>)}}/>}
        onSubmit={() => onRemoveWallet(selectedWallet)}/>
        <KeyBlueButton onClick={startWallet}>
          <T id="wallet.form.start.btn" m="Start selected wallet"/>
        </KeyBlueButton>
      </div>
    </Aux>
  );
};

export default SelectAvailableWalletsForm;
