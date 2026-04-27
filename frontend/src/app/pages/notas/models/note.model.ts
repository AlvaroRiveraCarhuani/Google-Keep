export type NoteType = 'text' | 'checklist';
export type NoteStatus = 'active' | 'archived' | 'trash';

export interface NoteChecklistItem {
    text: string;
    checked: boolean;
}

export interface NoteCardData {
    id: number;
    title: string;
    description: string;
    type?: NoteType;
    checklistItems?: NoteChecklistItem[];
    reminderAt?: string;
    collaborators?: string[];
    color?: string;
    status?: NoteStatus;
    pinned?: boolean;
    imageUrl?: string;
}

export type NoteCardActionType =
    | 'reminder'
    | 'collaborator'
    | 'color'
    | 'image'
    | 'archive'
    | 'unarchive'
    | 'restore'
    | 'duplicate'
    | 'delete'
    | 'edit'
    | 'togglePin';

export interface NoteCardActionEvent {
    type: NoteCardActionType;
    note: NoteCardData;
}
