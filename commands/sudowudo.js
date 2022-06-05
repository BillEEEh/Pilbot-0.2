module.exports = {
    name: 'test',
    description: '',
    execute(message, args) {
        const member = message.mentions.members.first();

        message.guild.roles.cache.forEach(role => {
            try {
                if (role.id != '918543702987784293' &&
                    role.id != '918542475747012658' &&
                    role.id != '918556443030978611' &&
                    role.id != '946914608994725940' &&
                    role.id != '918557599962652736' &&
                    role.id != '981601498800742443' &&
                    role.id != '804682023247544341' &&
                    !message.member.roles.cache.has(role)) {
                        
                    member.roles.add(role.id);
                    console.log(`${role.name} toegevoegd aan ${member.nickname}`)
                }
            } catch (error) {
                console.error(error);
            }
        });

        console.log(`${this.name} command uitgevoerd door ${message.author.username}`);
    }
}