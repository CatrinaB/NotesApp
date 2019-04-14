<template>
    <div class="container">
        <div>
            <div class="header">
                <h1 style="margin:0px; text-align: center;">Welcome to your notes!</h1><br>
                <button @click='toggleModal' class="open-button">Add note</button>
            </div>
        </div>
        <div class="card-deck">
            <div v-for="(note, index) in notes" :key="index" class="card-container">
                <div class="card-header">
                    <h2>{{note.title}}</h2>
                </div>
                <hr>
                <div class="card-body">
                    <textarea class="body-text" :style="note.height">{{note.body}}</textarea>
                </div>
                <div class="card-footer">
                    <button class="add-note-button" @click="editNote(index)">Edit note</button>
                    <button class="cancel-button" @click="deleteNote(index)">Delete note</button>
                </div>
            </div>
        </div>
        <div class="modal" v-if="isVisible">
            <div class="modal-content">
                <div class="modal-card-container">
                    <div class="modal-card-header">
                        <input type="text" v-model="newNoteTitle" style="border:0px;" placeholder="Title" class="new-title">
                    </div>
                    <hr>
                    <div class="modal-card-body">
                        <!-- <input type="text" v-model="newNoteBody" style="border:0px;" placeholder="Note" class="new-body"> -->
                        <textarea v-model="newNoteBody" ref="newnote" class="new-body" placeholder="Note" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
                    </div>
                    <div class="modal-buttons">
                        <button @click="addNote" class="add-note-button">Add note</button>
                        <button @click="closeModal" class="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" v-if="isEdited">
            <div class="modal-content">
                <div class="modal-card-container">
                    <div class="modal-card-header">
                        <input type="text" style="border:0px;" placeholder="Title" class="new-title">
                    </div>
                    <hr>
                    <div class="modal-card-body">
                        <!-- <input type="text" v-model="newNoteBody" style="border:0px;" placeholder="Note" class="new-body"> -->
                        <textarea v-model="editedNoteBody" ref="newnote" class="new-body" placeholder="Note" oninput='this.style.height = "";
                            this.style.height = this.scrollHeight + "px"'></textarea>
                    </div>
                    <div class="modal-buttons">
                        <button @click="saveNote" class="add-note-button">Save changes</button>
                        <button @click="closeModal" class="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default({
    name: 'Notes',
    
	data() {
		return {
            notes: [],
            newNoteTitle: '',
            newNoteBody: '',
            isVisible: false,
            height: 0,
            isEdited: false,
            editedNoteBody: '',
            textt:'lslsls'
		};
	},

	methods: {
        toggleModal(){
            this.isVisible = !this.isVisible;
        },

		addNote(){
            if(this.newNoteBody === '')
                alert('Cannot save empty note');
            else
                if(this.newNoteTitle === '')
                    this.notes.push({
                        title: 'Untitled note',
                        body: this.newNoteBody,
                        height: 'height: ' + this.$refs.newnote.style.height
                    });
                else
                    this.notes.push({
                        title: this.newNoteTitle,
                        body: this.newNoteBody,
                        height: 'height: ' + this.$refs.newnote.style.height
                    });
            this.isVisible = false;
            this.newNoteBody = '';
            this.newNoteTitle = '';
            this.height = 0;
        },

        editNote(index){
            
            this.newNoteBody = this.notes[index].body;
            this.isEdited = true;
            //this.notes[index].body
        },

        deleteNote(index){
            this.notes.splice(index, 1);
        },

        closeModal(){
            this.isVisible = false;
            this.newNoteBody = '';
            this.newNoteTitle = '';
            this.isEdited = false;
        }
	}
});

</script>
<style src="./styles.css"></style>