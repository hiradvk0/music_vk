const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "information",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/viteam";
      const InstagramLink = "https://www.instagram.com/viteammm/?utm_source=ig_web_button_share_sheet";
      const YoutubeLink = "https://www.youtube.com/@vikingteamm";
      const name3Link = "";
        const embed = new EmbedBuilder()
            .setColor('#000000')
            .setAuthor({
              name: 'Support Server',
              iconURL: '', 
              url: 'https://discord.gg/viteam'
          })
            .setDescription(` **Join our Discord server :**\n- Discord - ${supportServerLink}\n\n **Follow us on:**\n- Instagram - ${InstagramLink}\n- Youtube - ${YoutubeLink}\n- YouTube - ${name3Link}`)
            .setImage('')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};