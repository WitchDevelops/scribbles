import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {
  const accessChangeHandler = (
    type: UserType,
    setUserType: React.Dispatch<React.SetStateAction<UserType>>,
    onClickHandler?: (value: string) => void
  ) => {
    setUserType(type);
    if (onClickHandler) {
      onClickHandler(type);
    }
  };
  return (
    <Select
      value={userType}
      onValueChange={(type: UserType) => {
        accessChangeHandler(type, setUserType, onClickHandler);
      }}
    >
      <SelectTrigger className="shad-select">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="border-none bg-dark-200">
        <SelectItem value="viewer" className="shad-select-item">can view</SelectItem>
        <SelectItem value="editor" className="shad-select-item">can edit</SelectItem>
      </SelectContent>
    </Select>
  );
};
